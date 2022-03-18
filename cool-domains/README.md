# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## Research

- https://hardhat.org/advanced/hardhat-runtime-environment.html
- https://docs.soliditylang.org/en/v0.8.10/types.html#mapping-types

## Notes

The whole point of a name service is to help direct people to your place on the internet! Just like you type in google.com to get to Google, people will be able to use your name service to go to where ever they want! This is where we’ll do that. Users are going to send us a name and we’re going to give them a domain for that name!

`calldata` is non-persistent and can’t be modified. We like this because it takes the least amount of gas!