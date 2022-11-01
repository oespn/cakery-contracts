// SPDX-License-Identifier
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";

import "./Cakery_Entities.sol";
import "./Cakery_Rep_Orgs.sol";
import "./Cakery_Rep_Members.sol";

import "./Cakery_Rep_Proposals.sol";
import "./Cakery_Rep_Votes.sol";

contract Cakery {
    Cakery_Rep_Orgs _org = new Cakery_Rep_Orgs();
    Cakery_Rep_Members _member = new Cakery_Rep_Members();

    Cakery_Rep_Proposals _proposal = new Cakery_Rep_Proposals();
    Cakery_Rep_Votes _vote = new Cakery_Rep_Votes();

    Cakery_Entities _utils = new Cakery_Entities();

    // DAO/Org creation & reading

    function createOrg(
        bytes32 orgKey,
        string memory orgName,
        string memory orgRef,
        //bytes32 memberKey,
        string memory memberName
    ) public {
        //address sender = msg.sender;
        bytes32 memberKey = _member.addressToBytes32(msg.sender);

        _org.newOrg(orgKey, orgName, orgRef, memberKey);
        // check if repository has this member (separate from org.members)
        if (!_member.exists(memberKey)) {
            _member.newMember(memberKey, memberName, false, 20);
            // org.memberAdd(orgKey, memberKey); <-- note: called internally
        }
    }

    function simpleAddMe(bytes32 orgKey, string memory memberName) public {
        bytes32 memberKey = _member.addressToBytes32(msg.sender);
        simpleAddMember(orgKey, memberKey, memberName);
    }

    function simpleAddMember(
        bytes32 orgKey,
        bytes32 memberKey,
        string memory memberName
    ) public {
        if (!_member.exists(memberKey)) {
            _member.newMember(memberKey, memberName, false, 20);
            _org.memberAdd(orgKey, memberKey);

            if (!_proposal.exists(memberKey)) {
                // new members need approval.  Create the proposal for voting.
                bytes32 proposalKey = memberKey;
                uint16 votesRequired = _org.getVotesRequired(orgKey);
                _proposal.newProposal(
                    proposalKey,
                    orgKey,
                    memberKey,
                    memberName,
                    "",
                    "",
                    "",
                    0,
                    votesRequired,
                    Cakery_Entities.ProposalType.NEW_MEMBER
                );
                _org.proposalAdd(orgKey, proposalKey);
                bytes32 voteKey = memberKey;
                //bytes32 voteKey = bytes32(sha256(abi.encodePacked(memberKey,proposalKey)));
                _vote.newVote(voteKey, proposalKey, memberKey, true);
            }
        }
    }

    function getOrg(bytes32 orgKey)
        public
        view
        returns (
            string memory name,
            string memory ref,
            bytes32 memberKey,
            uint16 members,
            uint16 voteForRequired
        )
    {
        return _org.getOrg(orgKey);
    }

    function getMembersOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return _org.getOrgMembers(orgKey);
    }

    function getApprovedMembersOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return _org.getOrgApprovedMembers(orgKey);
    }

    // Claims & Transactions (proposals core entity)

    function getProposalsOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return _org.getOrgProposals(orgKey);
    }

    function getProposal(bytes32 proposalKey)
        public
        view
        returns (
            bytes32 orgKey,
            bytes32 memberKey,
            string memory name,
            string memory uuid,
            string memory doc_cid,
            string memory ref_id,
            uint256 total,
            uint16 nVotes,
            Cakery_Entities.ProposalType proposalType,
            Cakery_Entities.DecisionStatus decision
        )
    {
        Cakery_Entities.ProposalReturn memory r = _proposal.getProposal(proposalKey);

        return (
            r.orgKey,
            r.memberKey,
            r.name,
            r.uuid,
            r.doc_cid,
            r.ref_id,
            r.total,
            r.nVotes,
            r.proposalType,
            r.decision
        );
    }

    // Hard hat testing viewing only - won't return on TRON
    function getProposalsOfOrgData(bytes32 orgKey) public view returns (Cakery_Entities.ProposalReturn[] memory) {
        bytes32[] memory array = _org.getOrgProposals(orgKey);
        Cakery_Entities.ProposalReturn[] memory pData = new Cakery_Entities.ProposalReturn[](array.length);
        for (uint16 i = 0; i < array.length; i++) {
            pData[i] = _proposal.getProposal(array[i]);
            pData[i].proposalKey = array[i];
        }
        return pData;
    }

    // Hard hat testing only - won't return on TRON
    function getVotesOfProposalData(bytes32 proposalKey) public view returns (Cakery_Entities.VoteStruct[] memory) {
        bytes32[] memory array = _proposal.getProposalVotes(proposalKey);
        // array of members who have voted
        Cakery_Entities.VoteStruct[] memory pData = new Cakery_Entities.VoteStruct[](array.length);

        for (uint16 i = 0; i < array.length; i++) {
            //bytes32 voteKey = _proposal.getProposalVoteByMember(proposalKey, array[i]);
            pData[i] = _vote.getVote(array[i]); //needs to be VoteKey (not member)
        }
        return pData;
    }

    function getVotes(bytes32 proposalKey) public view returns (bytes32[] memory array) {
        return _proposal.getProposalVotes(proposalKey);
    }

    function getVote(bytes32 voteKey)
        public
        view
        returns (
            bytes32 proposalKey,
            bytes32 memberKey,
            bool voteFor
        )
    {
        Cakery_Entities.VoteStruct memory r = _vote.getVote(voteKey);

        return (r.proposalKey, r.memberKey, r.voteFor);
    }

    function createClaim(
        bytes32 proposalKey,
        bytes32 orgKey,
        string memory name,
        string memory uuid,
        string memory doc_cid,
        string memory ref_id,
        uint256 douAmount
    ) public {
        bytes32 memberKey = _member.addressToBytes32(msg.sender);
        require(_org.memberExists(orgKey, memberKey), "Member must be part of the Org");

        uint16 votesRequired = _org.getVotesRequired(orgKey);

        // check if repository has this Proposal (separate from org.poposals)
        if (!_proposal.exists(proposalKey)) {
            _proposal.newProposal(
                proposalKey,
                orgKey,
                memberKey,
                name,
                uuid,
                doc_cid,
                ref_id,
                douAmount,
                votesRequired,
                Cakery_Entities.ProposalType.PAY
            );
            _org.proposalAdd(orgKey, proposalKey);
            bytes32 voteKey = bytes32(sha256(abi.encodePacked(memberKey, proposalKey)));
            // bytes32(address(uint160(uint256(memberKey))) + address(uint160(uint256(proposalKey))));
            _vote.newVote(voteKey, proposalKey, memberKey, true);
        }
    }

    function castVote(
        bytes32 orgKey,
        bytes32 voteKey,
        bytes32 proposalKey,
        bool voteFor
    ) public {
        bytes32 memberKey = _member.addressToBytes32(msg.sender);
        castVoteAsMember(orgKey, voteKey, proposalKey, memberKey, voteFor);
    }

    //** MAKE PRIVATE */
    function castVoteAsMember(
        bytes32 orgKey,
        bytes32 voteKey,
        bytes32 proposalKey,
        bytes32 memberKey,
        bool voteFor
    ) public {
        //bytes32 memberKey = member.addressToBytes32(msg.sender);
        require(_org.memberExists(orgKey, memberKey), "Member must be part of the Org to Vote");
        require(_org.memberApprovedExists(orgKey, memberKey), "Member must be Approved in the Org to Vote");

        // check if repository has this Proposal (separate from org.poposals)
        if (_proposal.exists(proposalKey)) {
            Cakery_Entities.ProposalType action;
            uint256 newVal = 0;

            // returns action & value when the proposal condition is met
            (action, newVal) = _proposal.voteAdd(voteKey, proposalKey, memberKey, voteFor);
            //bytes voteKey = memberKey;
            _vote.newVote(voteKey, proposalKey, memberKey, voteFor);

            // check if votes met to close this proposal

            if (action == Cakery_Entities.ProposalType.NEW_MEMBER) // 'updateMemberAsApproved'
            {
                bytes32 approveMember = proposalKey;
                _org.memberApproved(orgKey, approveMember);
            } else if (action == Cakery_Entities.ProposalType.ORG_RULES) // 'updateMemberVoteRules'
            {
                _org.setVotesRequired(orgKey, uint16(newVal));
            }
        }
    }
}
