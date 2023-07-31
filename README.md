# [Fund Me App](https://tuafo.github.io/html-fund-me-fcc/)

The Fund Me App is a simple web application that interacts with the Ethereum blockchain and the FundMe smart contract. The application allows users to connect to the site via MetaMask, check the balance of a specific contract, fund the contract with ETH, and withdraw funds from the contract if you are the owner of the contract.

## Prerequisites

To use the Fund Me App, you will need:

- An Ethereum wallet (MetaMask is recommended)
- Add the testnet Sepolia to your wallet (https://www.alchemy.com/overviews/how-to-add-sepolia-to-metamask)
- Get some test ETH for funding the contract (Use a test net like sepolia, you can take some test eth here https://sepolia-faucet.pk910.de/ or https://sepoliafaucet.com/)

## Instructions

Follow the steps below to use the Fund Me App:

1. **Connect your wallet:** Click the "Connect" button to connect your Ethereum wallet to the application. If you are connected successfully, the button will change to display "Connected." If you don't have an Ethereum wallet installed, the button will show "Please install MetaMask."
2. **Check contract balance:** Click the "getBalance" button to retrieve and display the current balance of the contract in ETH.
3. **Fund the contract:** Enter the amount of ETH you wish to send in the input box labeled "ETH Amount." Then, click the "Fund" button. You will be prompted to confirm the transaction in your Ethereum wallet. Once the transaction is successful, a message will appear saying "[Amount] ETH has been funded successfully." If you cancel the transaction, the message will be "Transaction was cancelled."
4. **Withdraw funds:** Click the "Withdraw" button to withdraw funds from the contract. Only the owner of the contract can withdraw the funds. Once the transaction is successful, a message will appear saying "All funds have been withdrawn." If you cancel the transaction, the message will be "Transaction was cancelled."

## Smart Contract Details

The FundMe smart contract implemented in the application has several functions:

- `fund()`: This function allows a user to send ETH to the contract and checks if the sent value is equal to or more than a defined MINIMUM_USD in equivalent ETH price. If the condition is not satisfied, it will revert the transaction.
- `withdraw()`: This function allows only the owner to withdraw all the funds from the contract. It also resets the funders' tracking system.
- `getAddressToAmountFunded(address)`: A view function that returns the amount funded by a specific address.
- `getVersion()`, `getFunder(uint256)`, `getOwner()`, `getPriceFeed()`: View functions that provide information about the contract.

Enjoy using the Fund Me App and interacting with the Ethereum blockchain!

**Note:** Always be cautious when interacting with contracts on the Ethereum blockchain. Only send funds to contracts you trust, as transactions on the blockchain are irreversible.
