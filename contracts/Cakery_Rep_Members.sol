// SPDX-License-Identifier:  GPL-3.0-or-later
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";
import "./Cakery_Entities.sol";

contract Cakery_Rep_Members {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;
    HitchensUnorderedKeySetLib.Set memberSet;

    // struct MemberStruct {
    //     string name;
    //     bool delux;
    //     uint price;
    // }

    mapping(bytes32 => Cakery_Entities.MemberStruct) members;

    event LogNewMember(address sender, bytes32 key, string name, bool delux, uint256 price);
    event LogUpdateMember(address sender, bytes32 key, string name, bool delux, uint256 price);
    event LogRemMember(address sender, bytes32 key);

    function addressToBytes32(address addr) public pure returns (bytes32 key) {
        return bytes32(uint256(uint160(addr)) << 96);
    }

    function newMember(
        bytes32 key,
        string memory name,
        bool delux,
        uint256 price
    ) public {
        memberSet.insert(key); // Note that this will fail automatically if the key already exists.
        Cakery_Entities.MemberStruct storage w = members[key];
        w.name = name;
        w.delux = delux;
        w.price = price;
        emit LogNewMember(msg.sender, key, name, delux, price);
    }

    function updateMember(
        bytes32 key,
        string memory name,
        bool delux,
        uint256 price
    ) public {
        require(memberSet.exists(key), "Can't update a widget that doesn't exist.");
        Cakery_Entities.MemberStruct storage w = members[key];
        w.name = name;
        w.delux = delux;
        w.price = price;
        emit LogUpdateMember(msg.sender, key, name, delux, price);
    }

    function existsMember(bytes32 key) public view returns (bool) {
        return memberSet.exists(key);
    }

    function remMember(bytes32 key) public {
        memberSet.remove(key); // Note that this will fail automatically if the key doesn't exist
        delete members[key];
        emit LogRemMember(msg.sender, key);
    }

    function getMember(bytes32 key)
        public
        view
        returns (
            string memory name,
            bool delux,
            uint256 price
        )
    {
        require(memberSet.exists(key), "Can't get a Member that doesn't exist.");
        Cakery_Entities.MemberStruct storage w = members[key];
        return (w.name, w.delux, w.price);
    }

    function getMemberCount() internal view returns (uint256 count) {
        return memberSet.count();
    }

    function getMemberAtIndex(uint256 index) internal view returns (bytes32 key) {
        return memberSet.keyAtIndex(index);
    }
}
