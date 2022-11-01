// SPDX-License-Identifier:  GPL-3.0-or-later
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";

import "./Cakery_Entities.sol";

contract Cakery_Rep_Proposals {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;

    HitchensUnorderedKeySetLib.Set proposalSet;

    mapping(bytes32 => Cakery_Entities.ProposalStruct) proposals;

    event LogNewProposal(
        address sender,
        bytes32 key,
        string name,
        string uuid,
        string doc_cid,
        string ref_id,
        uint256 total,
        uint16 nVotes,
        uint16 nVotesFor,
        uint16 nVotesRequired,
        Cakery_Entities.ProposalType proposalType
    );
    event LogUpdateProposal(
        address sender,
        bytes32 key,
        string name,
        string uuid,
        string doc_cid,
        string ref_id,
        uint256 total,
        uint16 nVotes,
        uint16 nVotesFor,
        uint16 nVotesRequired,
        Cakery_Entities.ProposalType proposalType,
        Cakery_Entities.DecisionStatus decisionStatus
    );

    event LogRemProposal(address sender, bytes32 key);

    function newProposal(
        bytes32 key,
        bytes32 orgKey,
        bytes32 memberKey,
        string memory name,
        string memory uuid,
        string memory doc_cid,
        string memory ref_id,
        uint256 total,
        uint16 votesRequired,
        Cakery_Entities.ProposalType proposalType
    ) public {
        proposalSet.insert(key); // Note that this will fail automatically if the key already exists.

        // PRE: require (org[orgKey]member.exists(memberKey)) handled externally

        Cakery_Entities.ProposalStruct storage o = proposals[key];
        o.orgKey = orgKey;

        o.memberKey = memberKey;
        o.name = name;
        o.uuid = uuid;
        o.doc_cid = doc_cid;
        o.ref_id = ref_id;

        o.created_time = block.timestamp;
        o.total = total;

        o.decision = Cakery_Entities.DecisionStatus.UNDECIDED;
        o.proposalType = proposalType;

        o.nVotesRequired = votesRequired;
        // add member's vote
        o.nVotes = 1;
        o.votes.push(memberKey); // voteKey of own vote is members key
        o.hasVoted[memberKey] = true;
        // store ForVote attributes
        o.nVotesFor = 1;
        o.hasVotedFor[memberKey] = true;

        emit LogNewProposal(
            msg.sender,
            key,
            name,
            uuid,
            doc_cid,
            ref_id,
            total,
            o.nVotes,
            o.nVotesFor,
            votesRequired,
            o.proposalType
        );
    }

    function voteAdd(
        bytes32 voteKey,
        bytes32 proposalKey,
        bytes32 memberKey,
        bool voteFor
    ) public returns (Cakery_Entities.ProposalType action, uint256 value) {
        action = Cakery_Entities.ProposalType.NONE;
        value = 0;

        require(proposalSet.exists(proposalKey), "Can't add to an Proposal that doesn't exist.");
        Cakery_Entities.ProposalStruct storage p = proposals[proposalKey];

        // Only maps the Vote.  Keep entity external
        if (p.hasVoted[memberKey] == false) {
            p.nVotes = p.nVotes + 1;
            // deref with: m = o.votes[nVotes];
            p.votes.push(voteKey);
            p.hasVoted[memberKey] = true;

            // 'voteFor' get counted and members accounted
            if (voteFor) {
                p.nVotesFor = p.nVotesFor + 1;
                p.hasVotedFor[memberKey] = true;

                // process Vote outcome
                if (p.decision == Cakery_Entities.DecisionStatus.UNDECIDED) {
                    if (p.nVotesFor >= p.nVotesRequired) {
                        p.decision = Cakery_Entities.DecisionStatus.APPROVED;
                        action = p.proposalType;

                        if (p.proposalType == Cakery_Entities.ProposalType.ORG_RULES) {
                            action = Cakery_Entities.ProposalType.ORG_RULES;
                            value = p.total;
                        }
                    }
                }
            }
        }

        emit LogUpdateProposal(
            msg.sender,
            proposalKey,
            p.name,
            p.uuid,
            p.doc_cid,
            p.ref_id,
            p.total,
            p.nVotes,
            p.nVotesFor,
            p.nVotesRequired,
            p.proposalType,
            p.decision // emit result
        );
        return (action, value);
    }

    function getVotesCount(bytes32 proposalKey)
        public
        view
        returns (
            uint16 votes,
            uint16 votesFor,
            uint16 votesRequired
        )
    {
        require(proposalSet.exists(proposalKey), "Can't get a Proposal that doesn't exist.");
        Cakery_Entities.ProposalStruct storage p = proposals[proposalKey];
        return (p.nVotes, p.nVotesFor, p.nVotesRequired);
    }

    function getProposalVotes(bytes32 proposalKey) public view returns (bytes32[] memory array) {
        require(proposalSet.exists(proposalKey), "Can't get a Proposal that doesn't exist.");
        Cakery_Entities.ProposalStruct storage p = proposals[proposalKey];
        return (p.votes);
    }

    // function updateProposal(
    //     bytes32 key,
    //     string memory name,
    //     string memory ref,
    //     bytes32 memberKey,
    //     uint16 nVotes,
    //     uint16 voteForRequired
    // ) public {
    //     require(proposalSet.exists(key), "Can't update an Proposal that doesn't exist.");
    //     Cakery_Entities.ProposalStruct storage w = proposals[key];
    //     w.name = name;
    //     w.ref = ref;
    //     w.memberKey = memberKey;
    //     w.nVotes = nVotes;

    //     //w.voteForRequired = voteForRequired;
    //     emit LogUpdateProposal(msg.sender, key, name, ref, memberKey, nVotes, voteForRequired);
    // }

    function exists(bytes32 key) public view returns (bool) {
        return proposalSet.exists(key);
    }

    function remProposal(bytes32 key) public {
        proposalSet.remove(key); // Note that this will fail automatically if the key doesn't exist
        delete proposals[key];
        emit LogRemProposal(msg.sender, key);
    }

    function getProposal(bytes32 key)
        public
        view
        returns (
            Cakery_Entities.ProposalReturn memory r // (
        )
    //     bytes32 orgKey,
    //     bytes32 memberKey,
    //     string memory name,
    //     string memory uuid,
    //     string memory doc_cid,
    //     string memory ref_id,
    //     uint256 total,
    //     uint16 nVotes,
    //     Cakery_Entities.ProposalType proposalType,
    //     Cakery_Entities.DecisionStatus decision
    // )
    {
        require(proposalSet.exists(key), "Can't get a Proposal that doesn't exist.");
        Cakery_Entities.ProposalStruct storage p = proposals[key];
        r.orgKey = p.orgKey;
        r.memberKey = p.memberKey;
        r.name = p.name;
        r.uuid = p.uuid;
        r.doc_cid = p.doc_cid;
        r.ref_id = p.ref_id;
        r.total = p.total;
        r.nVotes = p.nVotes;
        r.proposalType = p.proposalType;
        r.decision = p.decision;
        return r;
        //new Cakery_Entities.ProposalReturn (p.orgKey, p.memberKey, p.name, p.uuid, p.doc_cid, p.ref_id, p.total, p.nVotes, p.proposalType, p.decision);
        //(p.orgKey, p.memberKey, p.name, p.uuid, p.doc_cid, p.ref_id, p.total, p.nVotes, p.proposalType, p.decision);
    }

    function getProposalCount() public view returns (uint256 count) {
        return proposalSet.count();
    }

    function getProposalAtIndex(uint256 index) public view returns (bytes32 key) {
        return proposalSet.keyAtIndex(index);
    }
}
