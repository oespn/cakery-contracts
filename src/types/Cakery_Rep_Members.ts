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

export interface Cakery_Rep_MembersInterface extends utils.Interface {
  functions: {
    "addressToBytes32(address)": FunctionFragment;
    "existsMember(bytes32)": FunctionFragment;
    "getMember(bytes32)": FunctionFragment;
    "newMember(bytes32,string,bool,uint256)": FunctionFragment;
    "remMember(bytes32)": FunctionFragment;
    "updateMember(bytes32,string,bool,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addressToBytes32"
      | "existsMember"
      | "getMember"
      | "newMember"
      | "remMember"
      | "updateMember"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addressToBytes32",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "existsMember",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMember",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "newMember",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "remMember",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMember",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressToBytes32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "existsMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateMember",
    data: BytesLike
  ): Result;

  events: {
    "LogNewMember(address,bytes32,string,bool,uint256)": EventFragment;
    "LogRemMember(address,bytes32)": EventFragment;
    "LogUpdateMember(address,bytes32,string,bool,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogNewMember"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRemMember"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdateMember"): EventFragment;
}

export interface LogNewMemberEventObject {
  sender: string;
  key: string;
  name: string;
  delux: boolean;
  price: BigNumber;
}
export type LogNewMemberEvent = TypedEvent<
  [string, string, string, boolean, BigNumber],
  LogNewMemberEventObject
>;

export type LogNewMemberEventFilter = TypedEventFilter<LogNewMemberEvent>;

export interface LogRemMemberEventObject {
  sender: string;
  key: string;
}
export type LogRemMemberEvent = TypedEvent<
  [string, string],
  LogRemMemberEventObject
>;

export type LogRemMemberEventFilter = TypedEventFilter<LogRemMemberEvent>;

export interface LogUpdateMemberEventObject {
  sender: string;
  key: string;
  name: string;
  delux: boolean;
  price: BigNumber;
}
export type LogUpdateMemberEvent = TypedEvent<
  [string, string, string, boolean, BigNumber],
  LogUpdateMemberEventObject
>;

export type LogUpdateMemberEventFilter = TypedEventFilter<LogUpdateMemberEvent>;

export interface Cakery_Rep_Members extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Cakery_Rep_MembersInterface;

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
    addressToBytes32(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { key: string }>;

    existsMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, boolean, BigNumber] & {
        name: string;
        delux: boolean;
        price: BigNumber;
      }
    >;

    newMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addressToBytes32(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  existsMember(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getMember(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, boolean, BigNumber] & {
      name: string;
      delux: boolean;
      price: BigNumber;
    }
  >;

  newMember(
    key: PromiseOrValue<BytesLike>,
    name: PromiseOrValue<string>,
    delux: PromiseOrValue<boolean>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remMember(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateMember(
    key: PromiseOrValue<BytesLike>,
    name: PromiseOrValue<string>,
    delux: PromiseOrValue<boolean>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addressToBytes32(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    existsMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, boolean, BigNumber] & {
        name: string;
        delux: boolean;
        price: BigNumber;
      }
    >;

    newMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    remMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogNewMember(address,bytes32,string,bool,uint256)"(
      sender?: null,
      key?: null,
      name?: null,
      delux?: null,
      price?: null
    ): LogNewMemberEventFilter;
    LogNewMember(
      sender?: null,
      key?: null,
      name?: null,
      delux?: null,
      price?: null
    ): LogNewMemberEventFilter;

    "LogRemMember(address,bytes32)"(
      sender?: null,
      key?: null
    ): LogRemMemberEventFilter;
    LogRemMember(sender?: null, key?: null): LogRemMemberEventFilter;

    "LogUpdateMember(address,bytes32,string,bool,uint256)"(
      sender?: null,
      key?: null,
      name?: null,
      delux?: null,
      price?: null
    ): LogUpdateMemberEventFilter;
    LogUpdateMember(
      sender?: null,
      key?: null,
      name?: null,
      delux?: null,
      price?: null
    ): LogUpdateMemberEventFilter;
  };

  estimateGas: {
    addressToBytes32(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    existsMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressToBytes32(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    existsMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remMember(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateMember(
      key: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      delux: PromiseOrValue<boolean>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
