// SPDX-License-Identifier:  GPL-3.0-or-later
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";
import "./Cakery_Entities.sol";

contract Cakery_Rep_Potents {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;
    HitchensUnorderedKeySetLib.Set potentSet;

    // struct PotentStruct {
    //     bytes32 proposalKey;
    //     bytes32 memberKey;
    //     bool potentFor; // or Against == false
    // }

    mapping(bytes32 => Cakery_Entities.PotentStruct) potents;

    event LogNewPotent(bytes32 memberKey, bytes32 proposalKey, uint256 power, uint16 percent_x_1000);

    event LogUpdatePotent(bytes32 memberKey, bytes32 proposalKey, uint256 power, uint16 percent_x_1000);

    // event LogUpdatePotent(address sender, bytes32 key, string name, bool delux, uint256 price);
    // event LogRemPotent(address sender, bytes32 key);

    function newPotent(
        bytes32 key, // Proposal + memberKey
        bytes32 proposalKey,
        bytes32 memberKey,
        uint256 power
        //uint16 percent_x_1000
    ) public {
        potentSet.insert(key); // Note that this will fail automatically if the key already exists.
        Cakery_Entities.PotentStruct storage v = potents[key];
        v.proposalKey = proposalKey;
        v.memberKey = memberKey;
        v.power = power;
        //v.percent = percent_x_1000;

        emit LogNewPotent(memberKey, proposalKey, power, 0);
    }

    function updatePotentPower(
        bytes32 key, // Proposal + memberKey
        bytes32 proposalKey,
        bytes32 memberKey,
        uint256 power
    ) public returns (bool)
    {
        bool isNew = false;
        if (!potentSet.exists(key))
        {
            newPotent(key, proposalKey, memberKey, power);
            isNew = true;
        }
        //require(potentSet.exists(key), "Can't update a potent that doesn't exist.");
        Cakery_Entities.PotentStruct storage s = potents[key];

        s.power = s.power + power;

        emit LogUpdatePotent(memberKey, proposalKey, power, s.percent);

        return isNew;
    }

    function updatePotentPercent(
        bytes32 key, // Proposal + memberKey
        uint16 percent
    ) public {
        require(potentSet.exists(key), "Can't update a potent precent that doesn't exist.");
        Cakery_Entities.PotentStruct storage s = potents[key];

        s.percent = percent;

        emit LogUpdatePotent(s.memberKey, s.proposalKey, s.power, s.percent);
    }


    function exists(bytes32 key) public view returns (bool) {
        return potentSet.exists(key);
    }

    // function remPotent(bytes32 key) public {
    //     potentSet.remove(key); // Note that this will fail automatically if the key doesn't exist
    //     delete potents[key];
    //     emit LogRemPotent(msg.sender, key);
    // }

    function getPotent(bytes32 key) public view returns (Cakery_Entities.PotentStruct memory)
    {
        require(potentSet.exists(key), "Can't get a Potent that doesn't exist.");
        Cakery_Entities.PotentStruct storage v = potents[key];
        return v;
    }

    function getPotentCount() public view returns (uint256 count) {
        return potentSet.count();
    }

    function getPotentAtIndex(uint256 index) public view returns (bytes32 key) {
        return potentSet.keyAtIndex(index);
    }
}
