﻿# Ethereum Name Storage DApp

Welcome to the Ethereum Name Storage DApp! This decentralized application (DApp) allows you to interact with a smart contract to store and retrieve names on the Ethereum blockchain.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Truffle](https://www.trufflesuite.com/truffle) (for smart contract development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/varunsudrik/dapp-name-storage.git
   ```

2. Navigate to the project directory:

   ```bash
   cd client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the DApp.

3. Interact with the DApp by entering names in the input field and clicking the "Change Data" button.

## Smart Contract

The smart contract used in this DApp is written in Solidity. You can find the contract source code in the `contracts` directory.

### Setter Function

```solidity
function setter(string memory _data) public {
    // Set the data on the blockchain
}
```
