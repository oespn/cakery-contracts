import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Cakery } from "../src/types/Cakery";
import type { Greeter } from "../src/types/Greeter";

declare module "mocha" {
  export interface Context {
    greeter: Greeter;
    cakery: Cakery;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
  alice: SignerWithAddress;
  bob: SignerWithAddress;
}
