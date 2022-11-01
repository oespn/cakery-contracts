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
    name: "exists",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getMemberAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
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
  "0x608060405234801561001057600080fd5b50610afe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639f0f89e71161005b5780639f0f89e714610103578063dc4b93a114610116578063ea36dbcc14610138578063f8024d101461014b57600080fd5b80630870d9561461008d57806338a699a4146100a257806382c947b7146100ca578063997072f7146100fb575b600080fd5b6100a061009b366004610882565b61015e565b005b6100b56100b0366004610955565b610262565b60405190151581526020015b60405180910390f35b6100ed6100d836600461096e565b60601b6bffffffffffffffffffffffff191690565b6040519081526020016100c1565b6001546100ed565b6100a0610111366004610882565b610274565b610129610124366004610955565b6102f2565b6040516100c1939291906109f8565b6100a0610146366004610955565b610433565b6100ed610159366004610955565b6104a8565b6101696000856104b4565b6101e05760405162461bcd60e51b815260206004820152602960248201527f43616e277420757064617465206120776964676574207468617420646f65736e60448201527f27742065786973742e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600084815260026020908152604090912084519091610203918391870190610781565b5060018101805460ff1916841515179055600281018290556040517fe683240688c4d4551e028aa0f7188f6c1c5c8c3e0f6c989c62cd83c486a8e700906102539033908890889088908890610a1d565b60405180910390a15050505050565b600061026e81836104b4565b92915050565b61027f600085610504565b6000848152600260209081526040909120845190916102a2918391870190610781565b5060018101805460ff1916841515179055600281018290556040517f524c19c51485a62794d3d052b85c443f89e130002ff17e24f329610f529f2865906102539033908890889088908890610a1d565b606060008061030181856104b4565b6103735760405162461bcd60e51b815260206004820152602660248201527f43616e2774206765742061204d656d626572207468617420646f65736e27742060448201527f65786973742e000000000000000000000000000000000000000000000000000060648201526084016101d7565b600084815260026020819052604090912060018101549181015481549192839260ff909116919083906103a590610a66565b80601f01602080910402602001604051908101604052809291908181526020018280546103d190610a66565b801561041e5780601f106103f35761010080835404028352916020019161041e565b820191906000526020600020905b81548152906001019060200180831161040157829003601f168201915b50505050509250935093509350509193909250565b61043e60008261062e565b6000818152600260205260408120906104578282610805565b5060018101805460ff19169055600060029091015560408051338152602081018390527f761029ff939b516575b77adb1384b37870b7106a876615b80d11a43a814458a8910160405180910390a150565b600061026e8183610757565b600182015460009081036104ca5750600061026e565b60008281526020849052604090205460018401805484929081106104f0576104f0610aa0565b906000526020600020015414905092915050565b600081900361057b5760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f60448201527f742062652030783000000000000000000000000000000000000000000000000060648201526084016101d7565b61058582826104b4565b156105f85760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303129202d204b657920616c72656160448201527f64792065786973747320696e20746865207365742e000000000000000000000060648201526084016101d7565b600180830180548083018255600082815260209020018390555461061c9190610ab6565b60009182526020929092526040902055565b61063882826104b4565b6106aa5760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303229202d204b657920646f65732060448201527f6e6f7420657869737420696e20746865207365742e000000000000000000000060648201526084016101d7565b600182810180546000926106bd91610ab6565b815481106106cd576106cd610aa0565b600091825260208083209091015484835290859052604080832054828452922082905560018501805491935083918390811061070b5761070b610aa0565b60009182526020808320909101929092558481529085905260408120556001840180548061073b5761073b610adb565b6001900381819060005260206000200160009055905550505050565b600082600101828154811061076e5761076e610aa0565b9060005260206000200154905092915050565b82805461078d90610a66565b90600052602060002090601f0160209004810192826107af57600085556107f5565b82601f106107c857805160ff19168380011785556107f5565b828001600101855582156107f5579182015b828111156107f55782518255916020019190600101906107da565b50610801929150610842565b5090565b50805461081190610a66565b6000825580601f10610821575050565b601f01602090049060005260206000209081019061083f9190610842565b50565b5b808211156108015760008155600101610843565b634e487b7160e01b600052604160045260246000fd5b8035801515811461087d57600080fd5b919050565b6000806000806080858703121561089857600080fd5b84359350602085013567ffffffffffffffff808211156108b757600080fd5b818701915087601f8301126108cb57600080fd5b8135818111156108dd576108dd610857565b604051601f8201601f19908116603f0116810190838211818310171561090557610905610857565b816040528281528a602084870101111561091e57600080fd5b8260208601602083013760006020848301015280975050505050506109456040860161086d565b9396929550929360600135925050565b60006020828403121561096757600080fd5b5035919050565b60006020828403121561098057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146109a457600080fd5b9392505050565b6000815180845260005b818110156109d1576020818501810151868301820152016109b5565b818111156109e3576000602083870101525b50601f01601f19169290920160200192915050565b606081526000610a0b60608301866109ab565b93151560208301525060400152919050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015260a060408201526000610a5260a08301866109ab565b931515606083015250608001529392505050565b600181811c90821680610a7a57607f821691505b602082108103610a9a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600082821015610ad657634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

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
