/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  Cakery_Rep_Proposals,
  Cakery_Rep_ProposalsInterface,
} from "../Cakery_Rep_Proposals";
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
        internalType: "string",
        name: "uuid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "doc_cid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ref_id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nVotes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nVotesFor",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nVotesRequired",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "enum Cakery_Entities.ProposalType",
        name: "proposalType",
        type: "uint8",
      },
    ],
    name: "LogNewProposal",
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
    name: "LogRemProposal",
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
        internalType: "string",
        name: "uuid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "doc_cid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ref_id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nVotes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nVotesFor",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nVotesRequired",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "enum Cakery_Entities.ProposalType",
        name: "proposalType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum Cakery_Entities.DecisionStatus",
        name: "decisionStatus",
        type: "uint8",
      },
    ],
    name: "LogUpdateProposal",
    type: "event",
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
    name: "getProposal",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "proposalKey",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "orgKey",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "memberKey",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uuid",
            type: "string",
          },
          {
            internalType: "string",
            name: "doc_cid",
            type: "string",
          },
          {
            internalType: "string",
            name: "ref_id",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "total",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "nVotes",
            type: "uint16",
          },
          {
            internalType: "enum Cakery_Entities.ProposalType",
            name: "proposalType",
            type: "uint8",
          },
          {
            internalType: "enum Cakery_Entities.DecisionStatus",
            name: "decision",
            type: "uint8",
          },
        ],
        internalType: "struct Cakery_Entities.ProposalReturn",
        name: "r",
        type: "tuple",
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
    name: "getProposalAtIndex",
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
    name: "getProposalCount",
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
        name: "proposalKey",
        type: "bytes32",
      },
    ],
    name: "getProposalVotes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "array",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalKey",
        type: "bytes32",
      },
    ],
    name: "getVotesCount",
    outputs: [
      {
        internalType: "uint16",
        name: "votes",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "votesFor",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "votesRequired",
        type: "uint16",
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
        internalType: "bytes32",
        name: "orgKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "uuid",
        type: "string",
      },
      {
        internalType: "string",
        name: "doc_cid",
        type: "string",
      },
      {
        internalType: "string",
        name: "ref_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "votesRequired",
        type: "uint16",
      },
      {
        internalType: "enum Cakery_Entities.ProposalType",
        name: "proposalType",
        type: "uint8",
      },
    ],
    name: "newProposal",
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
    name: "remProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "voteKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "proposalKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "voteFor",
        type: "bool",
      },
    ],
    name: "voteAdd",
    outputs: [
      {
        internalType: "enum Cakery_Entities.ProposalType",
        name: "action",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611739806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80637ac6d9b111610076578063be2cf09a1161005b578063be2cf09a1461017f578063bff28ea814610192578063c08cc02d146101b257600080fd5b80637ac6d9b1146101265780638b979f511461015e57600080fd5b8063066cc72e146100a857806338a699a4146100bd578063430694cf146100e55780636af42ce114610105575b600080fd5b6100bb6100b6366004611125565b6101ba565b005b6100d06100cb36600461121c565b6103e7565b60405190151581526020015b60405180910390f35b6100f86100f336600461121c565b6103f9565b6040516100dc91906112bc565b6101186101133660046113aa565b6107cd565b6040516100dc9291906113f0565b61013961013436600461121c565b610a45565b6040805161ffff948516815292841660208401529216918101919091526060016100dc565b61017161016c36600461121c565b610ae8565b6040519081526020016100dc565b6100bb61018d36600461121c565b610af4565b6101a56101a036600461121c565b610bcc565b6040516100dc919061140b565b600154610171565b6101c560008b610c9f565b60008a8152600260208181526040909220600181018c90559081018a9055885190916101f59183918b0190610f6c565b50865161020b90600383019060208a0190610f6c565b5085516102219060048301906020890190610f6c565b5084516102379060058301906020880190610f6c565b504260068201556007810184905560088101805460ff198116825583919061ffff191661010083600381111561026f5761026f611282565b0217905550828160080160026101000a81548161ffff021916908361ffff16021790555060018160080160046101000a81548161ffff021916908361ffff16021790555080600a0189908060018154018082558091505060019003906000526020600020016000909190919091505560018160090160008b815260200190815260200160002060006101000a81548160ff021916908315150217905550600181600b0160006101000a81548161ffff021916908361ffff160217905550600181600c0160008b815260200190815260200160002060006101000a81548160ff0219169083151502179055507fa163816913091132447c0758531d2ada4c725d9c8d508a966d0d1ce2604b2d87338c8a8a8a8a8a8860080160049054906101000a900461ffff1689600b0160009054906101000a900461ffff168c8b60080160019054906101000a900460ff166040516103d29b9a9998979695949392919061144f565b60405180910390a15050505050505050505050565b60006103f38183610dc9565b92915050565b610456604080516101608101825260008082526020820181905291810182905260608082018190526080820181905260a0820181905260c082015260e0810182905261010081018290529061012082019081526020016000905290565b610461600083610dc9565b6104c35760405162461bcd60e51b815260206004820152602860248201527f43616e27742067657420612050726f706f73616c207468617420646f65736e276044820152673a1032bc34b9ba1760c11b60648201526084015b60405180910390fd5b6000828152600260208181526040928390206001810154918501919091529081015491830191909152805481906104f990611506565b80601f016020809104026020016040519081016040528092919081815260200182805461052590611506565b80156105725780601f1061054757610100808354040283529160200191610572565b820191906000526020600020905b81548152906001019060200180831161055557829003601f168201915b5050505050826060018190525080600301805461058e90611506565b80601f01602080910402602001604051908101604052809291908181526020018280546105ba90611506565b80156106075780601f106105dc57610100808354040283529160200191610607565b820191906000526020600020905b8154815290600101906020018083116105ea57829003601f168201915b5050505050826080018190525080600401805461062390611506565b80601f016020809104026020016040519081016040528092919081815260200182805461064f90611506565b801561069c5780601f106106715761010080835404028352916020019161069c565b820191906000526020600020905b81548152906001019060200180831161067f57829003601f168201915b50505050508260a001819052508060050180546106b890611506565b80601f01602080910402602001604051908101604052809291908181526020018280546106e490611506565b80156107315780601f1061070657610100808354040283529160200191610731565b820191906000526020600020905b81548152906001019060200180831161071457829003601f168201915b505050505060c0830152600781015460e08301526008810154640100000000810461ffff16610100808501919091526101208401910460ff16600381111561077b5761077b611282565b9081600381111561078e5761078e611282565b905250600881015461014083019060ff1660028111156107b0576107b0611282565b908160028111156107c3576107c3611282565b8152505050919050565b6000806107da8186610dc9565b61084c5760405162461bcd60e51b815260206004820152602c60248201527f43616e27742061646420746f20616e2050726f706f73616c207468617420646f60448201527f65736e27742065786973742e000000000000000000000000000000000000000060648201526084016104ba565b600085815260026020908152604080832087845260098101909252822054909160ff909116151590036109b957600881015461089590640100000000900461ffff166001611556565b60088201805461ffff929092166401000000000265ffff0000000019909216919091179055600a8101805460018181018355600092835260208084209092018a9055878352600984019091526040909120805460ff1916909117905583156109b957600b81015461090b9061ffff166001611556565b600b8201805461ffff191661ffff929092169190911790556000858152600c820160205260408120805460ff19166001179055600882015460ff16600281111561095757610957611282565b036109b9576008810154600b82015461ffff6201000090920482169116106109b95760088101805460ff19166001179081905560ff610100909104169250600383818111156109a8576109a8611282565b036109b95760039250806007015491505b60078101546008820154600b8301546040517ff55196be767918a729776a6778a9bd6812359991eb8f54883ea1d1bb9d2041d293610a339333938c93889360038501936004860193600587019361ffff6401000000008404811693928116926201000081049091169160ff6101008304811692169061161b565b60405180910390a15094509492505050565b60008080610a538185610dc9565b610ab05760405162461bcd60e51b815260206004820152602860248201527f43616e27742067657420612050726f706f73616c207468617420646f65736e276044820152673a1032bc34b9ba1760c11b60648201526084016104ba565b50505060009081526002602052604090206008810154600b9091015461ffff6401000000008304811693918116926201000090041690565b60006103f38183610e19565b610aff600082610e43565b600081815260026020526040812090610b188282610ff0565b60018201600090556002820160009055600382016000610b389190610ff0565b610b46600483016000610ff0565b610b54600583016000610ff0565b6000600683018190556007830181905560088301805465ffffffffffff19169055610b8390600a84019061102d565b50600b01805461ffff1916905560408051338152602081018390527fd7f2608e52db7f98db43f741283f2df3b0368f1857b06341d3aadff602fb1bf5910160405180910390a150565b6060610bd9600083610dc9565b610c365760405162461bcd60e51b815260206004820152602860248201527f43616e27742067657420612050726f706f73616c207468617420646f65736e276044820152673a1032bc34b9ba1760c11b60648201526084016104ba565b600082815260026020908152604091829020600a81018054845181850281018501909552808552919392909190830182828015610c9257602002820191906000526020600020905b815481526020019060010190808311610c7e575b5050505050915050919050565b6000819003610d165760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f60448201527f742062652030783000000000000000000000000000000000000000000000000060648201526084016104ba565b610d208282610dc9565b15610d935760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303129202d204b657920616c72656160448201527f64792065786973747320696e20746865207365742e000000000000000000000060648201526084016104ba565b6001808301805480830182556000828152602090200183905554610db791906116e9565b60009182526020929092526040902055565b60018201546000908103610ddf575060006103f3565b6000828152602084905260409020546001840180548492908110610e0557610e05611700565b906000526020600020015414905092915050565b6000826001018281548110610e3057610e30611700565b9060005260206000200154905092915050565b610e4d8282610dc9565b610ebf5760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303229202d204b657920646f65732060448201527f6e6f7420657869737420696e20746865207365742e000000000000000000000060648201526084016104ba565b60018281018054600092610ed2916116e9565b81548110610ee257610ee2611700565b6000918252602080832090910154848352908590526040808320548284529220829055600185018054919350839183908110610f2057610f20611700565b600091825260208083209091019290925584815290859052604081205560018401805480610f5057610f50611716565b6001900381819060005260206000200160009055905550505050565b828054610f7890611506565b90600052602060002090601f016020900481019282610f9a5760008555610fe0565b82601f10610fb357805160ff1916838001178555610fe0565b82800160010185558215610fe0579182015b82811115610fe0578251825591602001919060010190610fc5565b50610fec929150611047565b5090565b508054610ffc90611506565b6000825580601f1061100c575050565b601f01602090049060005260206000209081019061102a9190611047565b50565b508054600082559060005260206000209081019061102a91905b5b80821115610fec5760008155600101611048565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261108357600080fd5b813567ffffffffffffffff8082111561109e5761109e61105c565b604051601f8301601f19908116603f011681019082821181831017156110c6576110c661105c565b816040528381528660208588010111156110df57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803561ffff8116811461111157600080fd5b919050565b80356004811061111157600080fd5b6000806000806000806000806000806101408b8d03121561114557600080fd5b8a35995060208b0135985060408b0135975060608b013567ffffffffffffffff8082111561117257600080fd5b61117e8e838f01611072565b985060808d013591508082111561119457600080fd5b6111a08e838f01611072565b975060a08d01359150808211156111b657600080fd5b6111c28e838f01611072565b965060c08d01359150808211156111d857600080fd5b506111e58d828e01611072565b94505060e08b013592506111fc6101008c016110ff565b915061120b6101208c01611116565b90509295989b9194979a5092959850565b60006020828403121561122e57600080fd5b5035919050565b6000815180845260005b8181101561125b5760208185018101518683018201520161123f565b8181111561126d576000602083870101525b50601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b600481106112a8576112a8611282565b9052565b600381106112a8576112a8611282565b60208152815160208201526020820151604082015260408201516060820152600060608301516101608060808501526112f9610180850183611235565b91506080850151601f19808685030160a08701526113178483611235565b935060a08701519150808685030160c08701526113348483611235565b935060c08701519150808685030160e0870152506113528382611235565b92505060e085015161010081818701528087015191505061012061137b8187018361ffff169052565b860151905061014061138f86820183611298565b86015190506113a0858301826112ac565b5090949350505050565b600080600080608085870312156113c057600080fd5b843593506020850135925060408501359150606085013580151581146113e557600080fd5b939692955090935050565b604081016113fe8285611298565b8260208301529392505050565b6020808252825182820181905260009190848201906040850190845b8181101561144357835183529284019291840191600101611427565b50909695505050505050565b600061016073ffffffffffffffffffffffffffffffffffffffff8e1683528c60208401528060408401526114858184018d611235565b90508281036060840152611499818c611235565b905082810360808401526114ad818b611235565b905082810360a08401526114c1818a611235565b9150508660c083015261ffff80871660e0840152808616610100840152808516610120840152506114f6610140830184611298565b9c9b505050505050505050505050565b600181811c9082168061151a57607f821691505b60208210810361153a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600061ffff80831681851680830382111561157357611573611540565b01949350505050565b8054600090600181811c908083168061159657607f831692505b602080841082036115b757634e487b7160e01b600052602260045260246000fd5b838852602088018280156115d257600181146115e35761160e565b60ff1987168252828201975061160e565b60008981526020902060005b87811015611608578154848201529086019084016115ef565b83019850505b5050505050505092915050565b600061018073ffffffffffffffffffffffffffffffffffffffff8f1683528d60208401528060408401526116518184018e61157c565b90508281036060840152611665818d61157c565b90508281036080840152611679818c61157c565b905082810360a084015261168d818b61157c565b9150508760c083015261ffff871660e08301526116b161010083018761ffff169052565b61ffff85166101208301526116ca610140830185611298565b6116d86101608301846112ac565b9d9c50505050505050505050505050565b6000828210156116fb576116fb611540565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

type Cakery_Rep_ProposalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Cakery_Rep_ProposalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cakery_Rep_Proposals__factory extends ContractFactory {
  constructor(...args: Cakery_Rep_ProposalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Cakery_Rep_Proposals> {
    return super.deploy(overrides || {}) as Promise<Cakery_Rep_Proposals>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Cakery_Rep_Proposals {
    return super.attach(address) as Cakery_Rep_Proposals;
  }
  override connect(signer: Signer): Cakery_Rep_Proposals__factory {
    return super.connect(signer) as Cakery_Rep_Proposals__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Cakery_Rep_ProposalsInterface {
    return new utils.Interface(_abi) as Cakery_Rep_ProposalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Cakery_Rep_Proposals {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Cakery_Rep_Proposals;
  }
}