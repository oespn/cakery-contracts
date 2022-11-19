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

export declare namespace Cakery_Entities {
  export type PotentStructStruct = {
    proposalKey: PromiseOrValue<BytesLike>;
    memberKey: PromiseOrValue<BytesLike>;
    power: PromiseOrValue<BigNumberish>;
    percent: PromiseOrValue<BigNumberish>;
  };

  export type PotentStructStructOutput = [string, string, BigNumber, number] & {
    proposalKey: string;
    memberKey: string;
    power: BigNumber;
    percent: number;
  };
}

export interface Cakery_Rep_PotentsInterface extends utils.Interface {
  functions: {
    "exists(bytes32)": FunctionFragment;
    "getPotent(bytes32)": FunctionFragment;
    "getPotentAtIndex(uint256)": FunctionFragment;
    "getPotentCount()": FunctionFragment;
    "newPotent(bytes32,bytes32,bytes32,uint256)": FunctionFragment;
    "updatePotentPercent(bytes32,uint16)": FunctionFragment;
    "updatePotentPower(bytes32,bytes32,bytes32,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exists"
      | "getPotent"
      | "getPotentAtIndex"
      | "getPotentCount"
      | "newPotent"
      | "updatePotentPercent"
      | "updatePotentPower"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exists",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPotent",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPotentAtIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPotentCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newPotent",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePotentPercent",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePotentPower",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPotent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPotentAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPotentCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newPotent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePotentPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePotentPower",
    data: BytesLike
  ): Result;

  events: {
    "LogNewPotent(bytes32,bytes32,uint256,uint16)": EventFragment;
    "LogUpdatePotent(bytes32,bytes32,uint256,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogNewPotent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdatePotent"): EventFragment;
}

export interface LogNewPotentEventObject {
  memberKey: string;
  proposalKey: string;
  power: BigNumber;
  percent_x_1000: number;
}
export type LogNewPotentEvent = TypedEvent<
  [string, string, BigNumber, number],
  LogNewPotentEventObject
>;

export type LogNewPotentEventFilter = TypedEventFilter<LogNewPotentEvent>;

export interface LogUpdatePotentEventObject {
  memberKey: string;
  proposalKey: string;
  power: BigNumber;
  percent_x_1000: number;
}
export type LogUpdatePotentEvent = TypedEvent<
  [string, string, BigNumber, number],
  LogUpdatePotentEventObject
>;

export type LogUpdatePotentEventFilter = TypedEventFilter<LogUpdatePotentEvent>;

export interface Cakery_Rep_Potents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Cakery_Rep_PotentsInterface;

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

    getPotent(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[Cakery_Entities.PotentStructStructOutput]>;

    getPotentAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { key: string }>;

    getPotentCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    newPotent(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updatePotentPercent(
      key: PromiseOrValue<BytesLike>,
      percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updatePotentPower(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  exists(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getPotent(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<Cakery_Entities.PotentStructStructOutput>;

  getPotentAtIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPotentCount(overrides?: CallOverrides): Promise<BigNumber>;

  newPotent(
    key: PromiseOrValue<BytesLike>,
    proposalKey: PromiseOrValue<BytesLike>,
    memberKey: PromiseOrValue<BytesLike>,
    power: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updatePotentPercent(
    key: PromiseOrValue<BytesLike>,
    percent: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updatePotentPower(
    key: PromiseOrValue<BytesLike>,
    proposalKey: PromiseOrValue<BytesLike>,
    memberKey: PromiseOrValue<BytesLike>,
    power: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getPotent(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Cakery_Entities.PotentStructStructOutput>;

    getPotentAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPotentCount(overrides?: CallOverrides): Promise<BigNumber>;

    newPotent(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePotentPercent(
      key: PromiseOrValue<BytesLike>,
      percent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePotentPower(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "LogNewPotent(bytes32,bytes32,uint256,uint16)"(
      memberKey?: null,
      proposalKey?: null,
      power?: null,
      percent_x_1000?: null
    ): LogNewPotentEventFilter;
    LogNewPotent(
      memberKey?: null,
      proposalKey?: null,
      power?: null,
      percent_x_1000?: null
    ): LogNewPotentEventFilter;

    "LogUpdatePotent(bytes32,bytes32,uint256,uint16)"(
      memberKey?: null,
      proposalKey?: null,
      power?: null,
      percent_x_1000?: null
    ): LogUpdatePotentEventFilter;
    LogUpdatePotent(
      memberKey?: null,
      proposalKey?: null,
      power?: null,
      percent_x_1000?: null
    ): LogUpdatePotentEventFilter;
  };

  estimateGas: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPotent(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPotentAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPotentCount(overrides?: CallOverrides): Promise<BigNumber>;

    newPotent(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updatePotentPercent(
      key: PromiseOrValue<BytesLike>,
      percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updatePotentPower(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPotent(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPotentAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPotentCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newPotent(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updatePotentPercent(
      key: PromiseOrValue<BytesLike>,
      percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updatePotentPower(
      key: PromiseOrValue<BytesLike>,
      proposalKey: PromiseOrValue<BytesLike>,
      memberKey: PromiseOrValue<BytesLike>,
      power: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}