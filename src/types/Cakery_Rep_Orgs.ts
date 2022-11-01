/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface Cakery_Rep_OrgsInterface extends utils.Interface {
  functions: {
    "exists(bytes32)": FunctionFragment;
    "getOrg(bytes32)": FunctionFragment;
    "getOrgApprovedMembers(bytes32)": FunctionFragment;
    "getOrgAtIndex(uint256)": FunctionFragment;
    "getOrgCount()": FunctionFragment;
    "getOrgMembers(bytes32)": FunctionFragment;
    "getOrgProposals(bytes32)": FunctionFragment;
    "getVotesRequired(bytes32)": FunctionFragment;
    "memberAdd(bytes32,bytes32)": FunctionFragment;
    "memberApproved(bytes32,bytes32)": FunctionFragment;
    "memberApprovedExists(bytes32,bytes32)": FunctionFragment;
    "memberExists(bytes32,bytes32)": FunctionFragment;
    "newOrg(bytes32,string,string,bytes32)": FunctionFragment;
    "proposalAdd(bytes32,bytes32)": FunctionFragment;
    "remOrg(bytes32)": FunctionFragment;
    "setVotesRequired(bytes32,uint16)": FunctionFragment;
    "updateOrg(bytes32,string,string,bytes32,uint16,uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exists"
      | "getOrg"
      | "getOrgApprovedMembers"
      | "getOrgAtIndex"
      | "getOrgCount"
      | "getOrgMembers"
      | "getOrgProposals"
      | "getVotesRequired"
      | "memberAdd"
      | "memberApproved"
      | "memberApprovedExists"
      | "memberExists"
      | "newOrg"
      | "proposalAdd"
      | "remOrg"
      | "setVotesRequired"
      | "updateOrg"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exists",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrg",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrgApprovedMembers",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrgAtIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrgCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrgMembers",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrgProposals",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesRequired",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "memberAdd",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "memberApproved",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "memberApprovedExists",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "memberExists",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "newOrg",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalAdd",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "remOrg",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotesRequired",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOrg",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOrg", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrgApprovedMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrgAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrgCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrgMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrgProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotesRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "memberAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "memberApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "memberApprovedExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "memberExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newOrg", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalAdd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remOrg", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVotesRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateOrg", data: BytesLike): Result;

  events: {
    "LogNewOrg(address,bytes32,string,string,bytes32,uint16,uint16)": EventFragment;
    "LogRemOrg(address,bytes32)": EventFragment;
    "LogUpdateOrg(address,bytes32,string,string,bytes32,uint16,uint16,uint32,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogNewOrg"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRemOrg"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdateOrg"): EventFragment;
}

export interface LogNewOrgEventObject {
  sender: string;
  key: string;
  name: string;
  ref: string;
  memberKey: string;
  members: number;
  voteForRequired: number;
}
export type LogNewOrgEvent = TypedEvent<
  [string, string, string, string, string, number, number],
  LogNewOrgEventObject
>;

export type LogNewOrgEventFilter = TypedEventFilter<LogNewOrgEvent>;

export interface LogRemOrgEventObject {
  sender: string;
  key: string;
}
export type LogRemOrgEvent = TypedEvent<[string, string], LogRemOrgEventObject>;

export type LogRemOrgEventFilter = TypedEventFilter<LogRemOrgEvent>;

export interface LogUpdateOrgEventObject {
  sender: string;
  key: string;
  name: string;
  ref: string;
  memberKey: string;
  members: number;
  membersApproved: number;
  proposals: number;
  voteForRequired: number;
}
export type LogUpdateOrgEvent = TypedEvent<
  [string, string, string, string, string, number, number, number, number],
  LogUpdateOrgEventObject
>;

export type LogUpdateOrgEventFilter = TypedEventFilter<LogUpdateOrgEvent>;

export interface Cakery_Rep_Orgs extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Cakery_Rep_OrgsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        name: string;
        ref: string;
        memberKey: string;
        nMembers: number;
        voteForRequired: number;
      }
    >;

    getOrgApprovedMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { array: string[] }>;

    getOrgAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { key: string }>;

    getOrgCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    getOrgMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { array: string[] }>;

    getOrgProposals(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { array: string[] }>;

    getVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number] & { votesRequired: number }>;

    memberAdd(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    memberApproved(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    memberApprovedExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    memberExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    newOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposalAdd(
      orgKey: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      votesRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      nMembers: PromiseOrValue<BigNumberish>,
      voteForRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  exists(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getOrg(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number, number] & {
      name: string;
      ref: string;
      memberKey: string;
      nMembers: number;
      voteForRequired: number;
    }
  >;

  getOrgApprovedMembers(
    orgKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getOrgAtIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getOrgCount(overrides?: CallOverrides): Promise<BigNumber>;

  getOrgMembers(
    orgKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getOrgProposals(
    orgKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getVotesRequired(
    orgKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  memberAdd(
    orgKey: PromiseOrValue<BytesLike>,
    memberKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  memberApproved(
    orgKey: PromiseOrValue<BytesLike>,
    memberKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  memberApprovedExists(
    orgKey: PromiseOrValue<BytesLike>,
    memberKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  memberExists(
    orgKey: PromiseOrValue<BytesLike>,
    memberKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  newOrg(
    key: PromiseOrValue<BytesLike>,
    name: PromiseOrValue<string>,
    ref: PromiseOrValue<string>,
    memberKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposalAdd(
    orgKey: PromiseOrValue<BytesLike>,
    proposalKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remOrg(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVotesRequired(
    orgKey: PromiseOrValue<BytesLike>,
    votesRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOrg(
    key: PromiseOrValue<BytesLike>,
    name: PromiseOrValue<string>,
    ref: PromiseOrValue<string>,
    memberKey: PromiseOrValue<BytesLike>,
    nMembers: PromiseOrValue<BigNumberish>,
    voteForRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        name: string;
        ref: string;
        memberKey: string;
        nMembers: number;
        voteForRequired: number;
      }
    >;

    getOrgApprovedMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getOrgAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrgCount(overrides?: CallOverrides): Promise<BigNumber>;

    getOrgMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getOrgProposals(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    memberAdd(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    memberApproved(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    memberApprovedExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    memberExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    newOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposalAdd(
      orgKey: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    remOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      votesRequired: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      nMembers: PromiseOrValue<BigNumberish>,
      voteForRequired: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogNewOrg(address,bytes32,string,string,bytes32,uint16,uint16)"(
      sender?: null,
      key?: null,
      name?: null,
      ref?: null,
      memberKey?: null,
      members?: null,
      voteForRequired?: null
    ): LogNewOrgEventFilter;
    LogNewOrg(
      sender?: null,
      key?: null,
      name?: null,
      ref?: null,
      memberKey?: null,
      members?: null,
      voteForRequired?: null
    ): LogNewOrgEventFilter;

    "LogRemOrg(address,bytes32)"(
      sender?: null,
      key?: null
    ): LogRemOrgEventFilter;
    LogRemOrg(sender?: null, key?: null): LogRemOrgEventFilter;

    "LogUpdateOrg(address,bytes32,string,string,bytes32,uint16,uint16,uint32,uint16)"(
      sender?: null,
      key?: null,
      name?: null,
      ref?: null,
      memberKey?: null,
      members?: null,
      membersApproved?: null,
      proposals?: null,
      voteForRequired?: null
    ): LogUpdateOrgEventFilter;
    LogUpdateOrg(
      sender?: null,
      key?: null,
      name?: null,
      ref?: null,
      memberKey?: null,
      members?: null,
      membersApproved?: null,
      proposals?: null,
      voteForRequired?: null
    ): LogUpdateOrgEventFilter;
  };

  estimateGas: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrgApprovedMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrgAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrgCount(overrides?: CallOverrides): Promise<BigNumber>;

    getOrgMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrgProposals(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    memberAdd(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    memberApproved(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    memberApprovedExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    memberExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposalAdd(
      orgKey: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      votesRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      nMembers: PromiseOrValue<BigNumberish>,
      voteForRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrgApprovedMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrgAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrgCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOrgMembers(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrgProposals(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    memberAdd(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    memberApproved(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    memberApprovedExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    memberExists(
      orgKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposalAdd(
      orgKey: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remOrg(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVotesRequired(
      orgKey: PromiseOrValue<BytesLike>,
      votesRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOrg(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      ref: PromiseOrValue<string>,
      memberKey: PromiseOrValue<BytesLike>,
      nMembers: PromiseOrValue<BigNumberish>,
      voteForRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
