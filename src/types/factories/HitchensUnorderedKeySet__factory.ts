/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  HitchensUnorderedKeySet,
  HitchensUnorderedKeySetInterface,
} from "../HitchensUnorderedKeySet";
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
        internalType: "string",
        name: "action",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "LogUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
    name: "insert",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "keyAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061053d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806338a699a41161005057806338a699a4146100985780638e0db0d9146100bb57806395bc2673146100ce57600080fd5b806306661abd1461006c5780632d287e4314610083575b600080fd5b6001545b6040519081526020015b60405180910390f35b6100966100913660046104c6565b6100e1565b005b6100ab6100a63660046104c6565b61015f565b604051901515815260200161007a565b6100706100c93660046104c6565b610171565b6100966100dc3660046104c6565b61017d565b6100ec6000826101f4565b604080513381526060602082018190526006908201527f696e73657274000000000000000000000000000000000000000000000000000060808201529081018290527fa4869f7c3fa4f122d4ca6781128192666d46e2b77aad294a632bd837170912349060a0015b60405180910390a150565b600061016b8183610323565b92915050565b600061016b8183610373565b61018860008261039d565b604080513381526060602082018190526006908201527f72656d6f7665000000000000000000000000000000000000000000000000000060808201529081018290527fa4869f7c3fa4f122d4ca6781128192666d46e2b77aad294a632bd837170912349060a001610154565b60008190036102705760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f60448201527f742062652030783000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61027a8282610323565b156102ed5760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303129202d204b657920616c72656160448201527f64792065786973747320696e20746865207365742e00000000000000000000006064820152608401610267565b600180830180548083018255600082815260209020018390555461031191906104df565b60009182526020929092526040902055565b600182015460009081036103395750600061016b565b600082815260208490526040902054600184018054849290811061035f5761035f610504565b906000526020600020015414905092915050565b600082600101828154811061038a5761038a610504565b9060005260206000200154905092915050565b6103a78282610323565b6104195760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303229202d204b657920646f65732060448201527f6e6f7420657869737420696e20746865207365742e00000000000000000000006064820152608401610267565b6001828101805460009261042c916104df565b8154811061043c5761043c610504565b600091825260208083209091015484835290859052604080832054828452922082905560018501805491935083918390811061047a5761047a610504565b6000918252602080832090910192909255848152908590526040812055600184018054806104aa576104aa61051a565b6001900381819060005260206000200160009055905550505050565b6000602082840312156104d857600080fd5b5035919050565b6000828210156104ff57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

type HitchensUnorderedKeySetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HitchensUnorderedKeySetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HitchensUnorderedKeySet__factory extends ContractFactory {
  constructor(...args: HitchensUnorderedKeySetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HitchensUnorderedKeySet> {
    return super.deploy(overrides || {}) as Promise<HitchensUnorderedKeySet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HitchensUnorderedKeySet {
    return super.attach(address) as HitchensUnorderedKeySet;
  }
  override connect(signer: Signer): HitchensUnorderedKeySet__factory {
    return super.connect(signer) as HitchensUnorderedKeySet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HitchensUnorderedKeySetInterface {
    return new utils.Interface(_abi) as HitchensUnorderedKeySetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HitchensUnorderedKeySet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HitchensUnorderedKeySet;
  }
}