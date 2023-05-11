---
title: ShareRing digital identity blockchain
publishDate: 2019-12-01 00:00:00
order: 4
img: /assets/sharering.jpeg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Write new blockchain module, front-to-back smart contract application, improve and fix bug from legacy code, upgrade library version, add monitoring for blockchain node
tags:
  - Blockchain
  - Rust
  - Golang
time: 9-2022 -> now
role: Blockchain developer
tech_stack: Golang, Rust, Javascript, Solidity, Cosmos blockchain, Ethereum blockchain, Metamask, Geth, CosmWasm, IBC, Rust-Axum, Rust-Sqlx, Grpc, MongoDB, Ipfs
---

## Smart Contract

I developed a smart contract application in our blockchain using ReactJS, Axum-Rust, NFT smart contract, IPFS, and OpenAI API. This application enables users to generate dynamic avatars for use in the blockchain. The application uses Rust to communicate with the blockchain and IPFS to store avatar metadata, while the OpenAI API is used to generate unique avatar designs. The NFT smart contract enables the avatars to be owned and traded as non-fungible tokens on the blockchain.

![avatar application showcase](/assets/avatar.png "avatar application showcase")

## Cosmos module

I developed a new blockchain module that enables us to customize the distribution of fees within our blockchain. With this module, we can now distribute fees to developers, contract creators, and validators, with the proportion of distribution subject to change based on proposals from the community. This new functionality allows us to tailor the fee distribution model to better align with the needs and priorities of our blockchain ecosystem.

## Blockchain services

I rewrote the swap-relayer service, reducing its size by 30%, enabling the transfer of tokens between our blockchain and the Ethereum blockchain. I also added new features such as monitoring and a notification system that sends alerts to our Slack channel, ensuring quick issue identification and resolution. For our team's development, I set up Git hooks using commitlint and implemented static code analysis using golangci-lint to improve code quality and prevent common errors. I also wrote a Dockerfile with multiple stage builds for the service.

To simplify development, I deployed a customized version of the Ethereum testnet, ensured proper configuration, and created a smart contract. Additionally, I generated Go code that enables interaction with the Ethereum smart contract and set up a keyring for signing Ethereum transactions as well as transactions on our blockchain.

In addition, I integrated IBC (Inter-Blockchain Communication) to enable communication with other blockchains in the Cosmos ecosystem. I also upgraded the Cosmos-SDK and other dependencies and implemented end-to-end testing for our blockchain application using dockertest. To support this, I set up two blockchains running in Docker containers and implemented Hermes relayer for package relaying.

## Team support

I fix many problems arise when we run our blockchain, like fix goroutine leak using pprof, define safe procedure to upgrade network... I provided assistance in training new blockchain developers. This included sharing my knowledge and experience in blockchain development, as well as helping to onboard them to our development environment and tools. I also provided guidance on best practices and assisted with any questions or issues they encountered during their training.
