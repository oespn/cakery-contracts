import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Cakery } from "../../src/types/Cakery";
import { Signers } from "../types";
import { shouldBehaveLikeCakery } from "./Cakery.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.alice = signers[1];
    this.signers.bob = signers[2];
  });

  describe("Cakery", function () {
    beforeEach(async function () {
      const cakeryArtifact: Artifact = await artifacts.readArtifact("Cakery");
      this.cakery = <Cakery>await waffle.deployContract(this.signers.admin, cakeryArtifact, []);
    });

    shouldBehaveLikeCakery();
  });
});
