/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  Cakery_Rep_Members,
  Cakery_Rep_MembersInterface,
} from "../Cakery_Rep_Members";
import type { PromiseOrValue } from "../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "delux",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "LogNewMember",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "LogRemMember",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "delux",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "LogUpdateMember",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "addressToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "existsMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getMember",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "delux",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "delux",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "newMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "remMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "delux",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "updateMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a97806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80639f0f89e7116100505780639f0f89e7146100e5578063dc4b93a1146100f8578063ea36dbcc1461011a57600080fd5b80630870d956146100775780630d27d6751461008c57806382c947b7146100b4575b600080fd5b61008a61008536600461081b565b61012d565b005b61009f61009a3660046108ee565b610231565b60405190151581526020015b60405180910390f35b6100d76100c2366004610907565b60601b6bffffffffffffffffffffffff191690565b6040519081526020016100ab565b61008a6100f336600461081b565b610243565b61010b6101063660046108ee565b6102c1565b6040516100ab93929190610991565b61008a6101283660046108ee565b610402565b610138600085610477565b6101af5760405162461bcd60e51b815260206004820152602960248201527f43616e277420757064617465206120776964676574207468617420646f65736e60448201527f27742065786973742e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000848152600260209081526040909120845190916101d291839187019061071a565b5060018101805460ff1916841515179055600281018290556040517fe683240688c4d4551e028aa0f7188f6c1c5c8c3e0f6c989c62cd83c486a8e7009061022290339088908890889088906109b6565b60405180910390a15050505050565b600061023d8183610477565b92915050565b61024e6000856104c7565b60008481526002602090815260409091208451909161027191839187019061071a565b5060018101805460ff1916841515179055600281018290556040517f524c19c51485a62794d3d052b85c443f89e130002ff17e24f329610f529f28659061022290339088908890889088906109b6565b60606000806102d08185610477565b6103425760405162461bcd60e51b815260206004820152602660248201527f43616e2774206765742061204d656d626572207468617420646f65736e27742060448201527f65786973742e000000000000000000000000000000000000000000000000000060648201526084016101a6565b600084815260026020819052604090912060018101549181015481549192839260ff90911691908390610374906109ff565b80601f01602080910402602001604051908101604052809291908181526020018280546103a0906109ff565b80156103ed5780601f106103c2576101008083540402835291602001916103ed565b820191906000526020600020905b8154815290600101906020018083116103d057829003601f168201915b50505050509250935093509350509193909250565b61040d6000826105f1565b600081815260026020526040812090610426828261079e565b5060018101805460ff19169055600060029091015560408051338152602081018390527f761029ff939b516575b77adb1384b37870b7106a876615b80d11a43a814458a8910160405180910390a150565b6001820154600090810361048d5750600061023d565b60008281526020849052604090205460018401805484929081106104b3576104b3610a39565b906000526020600020015414905092915050565b600081900361053e5760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f60448201527f742062652030783000000000000000000000000000000000000000000000000060648201526084016101a6565b6105488282610477565b156105bb5760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303129202d204b657920616c72656160448201527f64792065786973747320696e20746865207365742e000000000000000000000060648201526084016101a6565b60018083018054808301825560008281526020902001839055546105df9190610a4f565b60009182526020929092526040902055565b6105fb8282610477565b61066d5760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303229202d204b657920646f65732060448201527f6e6f7420657869737420696e20746865207365742e000000000000000000000060648201526084016101a6565b6001828101805460009261068091610a4f565b8154811061069057610690610a39565b60009182526020808320909101548483529085905260408083205482845292208290556001850180549193508391839081106106ce576106ce610a39565b6000918252602080832090910192909255848152908590526040812055600184018054806106fe576106fe610a74565b6001900381819060005260206000200160009055905550505050565b828054610726906109ff565b90600052602060002090601f016020900481019282610748576000855561078e565b82601f1061076157805160ff191683800117855561078e565b8280016001018555821561078e579182015b8281111561078e578251825591602001919060010190610773565b5061079a9291506107db565b5090565b5080546107aa906109ff565b6000825580601f106107ba575050565b601f0160209004906000526020600020908101906107d891906107db565b50565b5b8082111561079a57600081556001016107dc565b634e487b7160e01b600052604160045260246000fd5b8035801515811461081657600080fd5b919050565b6000806000806080858703121561083157600080fd5b84359350602085013567ffffffffffffffff8082111561085057600080fd5b818701915087601f83011261086457600080fd5b813581811115610876576108766107f0565b604051601f8201601f19908116603f0116810190838211818310171561089e5761089e6107f0565b816040528281528a60208487010111156108b757600080fd5b8260208601602083013760006020848301015280975050505050506108de60408601610806565b9396929550929360600135925050565b60006020828403121561090057600080fd5b5035919050565b60006020828403121561091957600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461093d57600080fd5b9392505050565b6000815180845260005b8181101561096a5760208185018101518683018201520161094e565b8181111561097c576000602083870101525b50601f01601f19169290920160200192915050565b6060815260006109a46060830186610944565b93151560208301525060400152919050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015260a0604082015260006109eb60a0830186610944565b931515606083015250608001529392505050565b600181811c90821680610a1357607f821691505b602082108103610a3357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600082821015610a6f57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

type Cakery_Rep_MembersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Cakery_Rep_MembersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cakery_Rep_Members__factory extends ContractFactory {
  constructor(...args: Cakery_Rep_MembersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Cakery_Rep_Members> {
    return super.deploy(overrides || {}) as Promise<Cakery_Rep_Members>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Cakery_Rep_Members {
    return super.attach(address) as Cakery_Rep_Members;
  }
  override connect(signer: Signer): Cakery_Rep_Members__factory {
    return super.connect(signer) as Cakery_Rep_Members__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Cakery_Rep_MembersInterface {
    return new utils.Interface(_abi) as Cakery_Rep_MembersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Cakery_Rep_Members {
    return new Contract(address, _abi, signerOrProvider) as Cakery_Rep_Members;
  }
}
