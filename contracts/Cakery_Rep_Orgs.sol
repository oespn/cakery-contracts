// SPDX-License-Identifier:  GPL-3.0-or-later
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";

import "./Cakery_Entities.sol";

contract Cakery_Rep_Orgs {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;

    HitchensUnorderedKeySetLib.Set orgSet;

    // struct OrgStruct {
    //     string name;
    //     string ref;
    //     bytes32 memberKey;
    //     // internal
    //     uint16 nMembers;
    //     uint16 voteForRequired;

    //     mapping(bytes32 => bool) members; // true if this member exists in org. Keep CRUD separate.

    // }

    mapping(bytes32 => Cakery_Entities.OrgStruct) orgs;

    event LogNewOrg(
        address sender,
        bytes32 key,
        string name,
        string ref,
        bytes32 memberKey,
        uint16 members,
        uint16 voteForRequired
    );
    event LogUpdateOrg(
        address sender,
        bytes32 key,
        string name,
        string ref,
        bytes32 memberKey,
        uint16 members,
        uint16 membersApproved,
        uint32 proposals,
        uint16 voteForRequired
    );
    event LogRemOrg(address sender, bytes32 key);

    function newOrg(
        bytes32 key,
        string memory name,
        string memory ref,
        bytes32 memberKey
    ) public {
        orgSet.insert(key); // Note that this will fail automatically if the key already exists.
        Cakery_Entities.OrgStruct storage o = orgs[key];
        o.name = name;
        o.ref = ref;
        o.memberKey = memberKey;
        o.nMembers = 1;
        o.nMembersApproved = 1;
        o.nProposals = 0;
        o.voteForRequired = 1;
        // add member
        o.members.push(memberKey);
        o.isMember[memberKey] = true;
        // approve member
        o.membersApproved.push(memberKey);
        o.isMemberApproved[memberKey] = true;

        emit LogNewOrg(msg.sender, key, name, ref, memberKey, o.nMembers, o.voteForRequired);
    }

    // function _memberAdd(bytes32 orgKey, bytes32 memberKey) public view returns
    // (Cakery_Entities.OrgStruct memory org) {
    //     Cakery_Entities.OrgStruct storage o = orgs[orgKey];
    //     if (o.isMember[memberKey] == false)
    //     {
    //          o.nMembers = o.nMembers + 1;
    //          // deref with: m = o.members[nMembers];
    //          o.members.push(memberKey);
    //          o.isMember[memberKey] = true;
    //     }
    // }

    /// Member associated with the Organsation (Does not infer Approved)

    function memberAdd(bytes32 orgKey, bytes32 memberKey) public {
        require(orgSet.exists(orgKey), "Can't add to an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];

        // Only maps the Member.  Keep CRUD external
        if (o.isMember[memberKey] == false) {
            o.nMembers = o.nMembers + 1;
            // deref with: m = o.members[nMembers];
            o.members.push(memberKey);
            o.isMember[memberKey] = true;
        }
        emit LogUpdateOrg(
            msg.sender,
            orgKey,
            o.name,
            o.ref,
            memberKey,
            o.nMembers,
            o.nMembersApproved,
            o.nProposals,
            o.voteForRequired
        );
    }

    function memberExists(bytes32 orgKey, bytes32 memberKey) public view returns (bool) {
        require(orgSet.exists(orgKey), "Can't find Org to check Member.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        return o.isMember[memberKey];
    }

    function getOrgMembers(bytes32 orgKey) public view returns (bytes32[] memory array) {
        require(orgSet.exists(orgKey), "Can't get an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        return (o.members);
    }

    /// Approved Members associated with the Organsation

    function memberApproved(bytes32 orgKey, bytes32 memberKey) public {
        require(orgSet.exists(orgKey), "Can't add to an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];

        if (o.isMemberApproved[memberKey] == false) {
            o.nMembersApproved = o.nMembersApproved + 1;
            // deref with: m = o.members[nMembers];
            o.membersApproved.push(memberKey);
            o.isMemberApproved[memberKey] = true;
        }
        emit LogUpdateOrg(
            msg.sender,
            orgKey,
            o.name,
            o.ref,
            memberKey,
            o.nMembers,
            o.nMembersApproved,
            o.nProposals,
            o.voteForRequired
        );
    }

    function memberApprovedExists(bytes32 orgKey, bytes32 memberKey) public view returns (bool) {
        require(orgSet.exists(orgKey), "Can't find Org to check Member.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        return o.isMemberApproved[memberKey];
    }

    function getOrgApprovedMembers(bytes32 orgKey) public view returns (bytes32[] memory array) {
        require(orgSet.exists(orgKey), "Can't get an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        return (o.membersApproved);
    }

    function getVotesRequired(bytes32 orgKey) public view returns (uint16 votesRequired) {
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        return (o.voteForRequired);
    }

    function setVotesRequired(bytes32 orgKey, uint16 votesRequired) public {
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        o.voteForRequired = votesRequired;
    }

    // Proposals associated with Org

    function proposalAdd(bytes32 orgKey, bytes32 proposalKey) public {
        require(orgSet.exists(orgKey), "Can't add to an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];

        // Only maps the Proposal.  Keep CRUD external
        if (o.hasProposal[proposalKey] == false) {
            o.nProposals = o.nProposals + 1;
            // deref with: m = o.members[proposalKey];
            o.proposals.push(proposalKey);
            o.hasProposal[proposalKey] = true;
        }
        emit LogUpdateOrg(
            msg.sender,
            orgKey,
            o.name,
            o.ref,
            o.memberKey,
            o.nMembers,
            o.nMembersApproved,
            o.nProposals,
            o.voteForRequired
        );
    }

    function getOrgProposals(bytes32 orgKey) public view returns (bytes32[] memory array) {
        require(orgSet.exists(orgKey), "Can't get an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage o = orgs[orgKey];
        return (o.proposals);
    }

    function updateOrg(
        bytes32 key,
        string memory name,
        string memory ref,
        bytes32 memberKey,
        uint16 nMembers,
        uint16 voteForRequired
    ) public {
        require(orgSet.exists(key), "Can't update an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage w = orgs[key];
        w.name = name;
        w.ref = ref;
        w.memberKey = memberKey;
        w.nMembers = nMembers;
        w.voteForRequired = voteForRequired;
        emit LogUpdateOrg(
            msg.sender,
            key,
            name,
            ref,
            memberKey,
            nMembers,
            w.nMembersApproved,
            w.nProposals,
            voteForRequired
        );
    }

    function exists(bytes32 key) public view returns (bool) {
        return orgSet.exists(key);
    }

    function remOrg(bytes32 key) public {
        orgSet.remove(key); // Note that this will fail automatically if the key doesn't exist
        delete orgs[key];
        emit LogRemOrg(msg.sender, key);
    }

    function getOrg(bytes32 key)
        public
        view
        returns (
            string memory name,
            string memory ref,
            bytes32 memberKey,
            uint16 nMembers,
            uint16 voteForRequired
        )
    {
        require(orgSet.exists(key), "Can't get an Org that doesn't exist.");
        Cakery_Entities.OrgStruct storage w = orgs[key];
        return (w.name, w.ref, w.memberKey, w.nMembers, w.voteForRequired);
    }

    function getOrgCount() public view returns (uint256 count) {
        return orgSet.count();
    }

    function getOrgAtIndex(uint256 index) public view returns (bytes32 key) {
        return orgSet.keyAtIndex(index);
    }
}
