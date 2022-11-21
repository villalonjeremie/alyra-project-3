# Voting Dapp

For starting Voting Dapp

## Installation

Run Ganache

```sh
$ ganache
```

```sh
$ git clone https://github.com/villalonjeremie/alyra-project-3.git
$ cd truffle
$ npm install
$ truffle migrate --network development
```


Start the react dev server.

```sh
$ cd ../client
$ npm install
$ npm run start
```

Browser should be opening

http://localhost:3000/

## Using Dapp

On localhost, connect your wallet with address deployer. Add Voter as you want then click StartRegisterProposal.

Connect wallet with address voter, then add proposal.

Connect on address deployer then click on start voting session.

Connect wallet with address voter, then set Vote. 

Connect on address deployer then click on tally vote.

Connect wallet with address voter, then the proposal of winner should be displayed. 

## Deploy and Using Dapp on Testnet Goerli

Create .env 
Create INFURA_ID on goerli

INFURA_ID = [INFURA_ID]
MNEMONIC = [PASSPHRASE OF YOUR WALLET]

```sh
$ cd truffle
$ truffle migrate --network goerli
```
Go to [Dapp Voting](https://alyra-project-3-97latl63z-villalonjeremie.vercel.app/)

