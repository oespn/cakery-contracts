import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Cakery } from "../../src/types/Cakery";
import type { Cakery__factory } from "../../src/types/factories/Cakery__factory";

task("deploy:Cakery")
  //.addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();
    const cakeryFactory: Cakery__factory = <Cakery__factory>await ethers.getContractFactory("Cakery");
    const cakery: Cakery = <Cakery>await cakeryFactory.connect(signers[0]).deploy();
    await cakery.deployed();
    console.log("Cakery deployed to: ", cakery.address);
  });
