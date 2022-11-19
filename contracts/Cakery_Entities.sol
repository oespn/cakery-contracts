// SPDX-License-Identifier:  GPL-3.0-or-later
pragma solidity ^0.8.6;

contract Cakery_Entities {
    enum DecisionStatus {
        UNDECIDED,
        APPROVED,
        REJECTED
    }
    enum ProposalType {
        NONE,
        PAY,
        NEW_MEMBER,
        ORG_RULES
    }

    // Data repository use only

    struct MemberStruct {
        string name;
        bool delux;
        uint256 price;
    }
    // key: mapping(bytes32 => MemberStruct) members;

    struct OrgStruct {
        string name;
        string ref;
        bytes32 memberKey;
        // internal
        uint16 voteForRequired;
        // mappings & indexes to FKs
        uint16 nMembers; // 65k limit
        mapping(bytes32 => bool) isMember; // true if this member exists in org. Keep CRUD separate.
        bytes32[] members;
        uint16 nMembersApproved; // 65k limit
        mapping(bytes32 => bool) isMemberApproved; // true if this member exists in org. Keep CRUD separate.
        bytes32[] membersApproved;
        uint32 nProposals; // 4292m limit
        mapping(bytes32 => bool) hasProposal; // true if this member has voted on proposal. Keep CRUD separate.
        bytes32[] proposals;
    }
    // key: mapping(bytes32 => OrgStruct) orgs;

    struct ProposalStruct {
        string name;
        // fk
        bytes32 orgKey; // organisation
        bytes32 memberKey; // creator
        // ext refs
        string uuid; // Integeration with external DB
        string doc_cid; // file ref eg: invoice PDF
        string ref_id; // external identifier eg: invoice #
        // properties
        uint256 created_time; // epoch time
        uint256 total; //DOU (DAO IOUs)
        DecisionStatus decision; // = DecisionStatus.Undecided;
        ProposalType proposalType; // = ProposalType.Pay;
        uint16 nVotesRequired; // From Org at the time the Proposal created
        // internal mappings
        uint16 nVotes;
        mapping(bytes32 => bool) hasVoted; // true if this member has voted on proposal. Keep CRUD separate.
        bytes32[] votes; // ref: VoteSet
        uint16 nVotesFor; // How many votes For the proposal (not opposed)
        mapping(bytes32 => bool) hasVotedFor; // those in hasVoted not in hasVoted For voted against.
    }
    // key: mapping(bytes32 => Cakery_Entities.ProposalStruct) proposals;

    struct VoteStruct {
        bytes32 proposalKey;
        bytes32 memberKey;
        bool voteFor; // or Against == false
    }

    struct PotentStruct {
        bytes32 proposalKey;
        bytes32 memberKey;
        uint256 power; // Total DOU at time of vote
        uint16 percent;
    }

    // key: mapping(bytes32 => VoteStruct) votes;

    /// Explicit return models for external use
    /// Use above structs where no difference required

    struct ProposalReturn {
        bytes32 proposalKey;
        bytes32 orgKey;
        bytes32 memberKey;
        string name;
        string uuid;
        string doc_cid;
        string ref_id;
        uint256 total;
        uint16 nVotes;
        ProposalType proposalType;
        DecisionStatus decision;
    }

    // For flattening Structs to Strings

    function appendString(
        string memory _a,
        string memory _b,
        string memory _c
    ) internal pure returns (string memory) {
        return string(abi.encodePacked(_a, _b, _c));
    }
}
