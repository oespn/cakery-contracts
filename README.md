### Overview

Smart Contracts:

- Solidity (EVM Compatible) - Secure, type-safe and readable
- Event emitting - For integration with GraphQL (tracing / audit capable)
- Simple extensible model based on: Proposal -> transaction lifecycle through voting which can be easily adapted to various types of work associated with an organisation.
- Inbuilt consensus rules and the ability to update though a proposal and voting.
- External ID fields to assist integration with external databases.
- On-chain data maintained to only the critical elements and references necessary for on chain actions.
- Blob link (immutable IPFS storage) to encode references to large data PDF for invoices, proposal docs etc

Functions:

![run a DAO with On chain governance without token](
https://res.cloudinary.com/devpost/image/fetch/s--vU4BFFGE--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/927/638/datas/original.jpg)


### Test cases in Hardhat

```sh
$ yarn test
```



## Deploy to Aurora Testnet

```sh
$ yarn deploy-cakery
```


## Library Credits

- [CRUD](https://github.com/rob-Hitchens/UnorderedKeySet): by Rob Hutchens - abstracts DLT data management for clean code
- [Token Contracts](https://github.com/openzeppelin): by OpenZeppelin - simple generation of ERC20 and ERC1155 tokens.


## Solidity Contract Building

Template by: https://github.com/paulrberg/hardhat-template

My favorite setup for writing Solidity smart contracts.

- [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Waffle](https://github.com/EthWorks/Waffle): tooling for writing comprehensive smart contract tests
- [Solhint](https://github.com/protofire/solhint): linter
- [Solcover](https://github.com/sc-forks/solidity-coverage): code coverage
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter

This is a GitHub template, which means you can reuse it as many times as you want. You can do that by clicking the "Use this
template" button at the top of the page.

## Usage

### Pre Requisites

Before running any command, you need to create a `.env` file and set a BIP-39 compatible mnemonic as an environment
variable. Follow the example in `.env.example`. If you don't already have a mnemonic, use this [website](https://iancoleman.io/bip39/) to generate one.

Then, proceed with installing dependencies:

```sh
$ yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ yarn typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
$ yarn lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ yarn lint:ts
```

### Test

Run the Mocha tests:

```sh
$ yarn test
```

### Coverage

Generate the code coverage report:

```sh
$ yarn coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
$ REPORT_GAS=true yarn test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ yarn clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
$ yarn deploy --greeting "Bonjour, le monde!"
```

## Syntax Highlighting

If you use VSCode, you can enjoy syntax highlighting for your Solidity code via the [hardhat-vscode](https://github.com/NomicFoundation/hardhat-vscode) extension.

## Caveats

### Ethers and Waffle

If you can't get the [Waffle matchers](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html) to work, try to
make your `ethers` package version match the version used by the `@ethereum-waffle/chai` package. Seem
[#111](https://github.com/paulrberg/solidity-template/issues/111) for more details.




## ProviderError: Out Of Fund

Cause is not enough funds.  This contract requires about ETH 0.003 balance to deploy.
Success with: hardhat deploy:Cakery --network aurorat
Cakery deployed to:  0x1175B8Fb85e5B545E3364055B5EfB5b239cf9FA6

## Celo deployment:

Now on Celo:
https://explorer.celo.org/alfajores/address/0xc00F017c8a9E7a79fA1b9D007dE3ac1Da6fC9033
