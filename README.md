
## Required Tools
1. Npm and node should be installed
2. truffle 
3. Metamask extension in the browser


### TO compile the contract
1. Clone the repo
2. cd Voting-dapp/contract-folder
3. Install dependencies: `npm install`
4. Run truffle in a terminal: `truffle develop`
5. Compile the code: `compile`
6. Migrate the code: `migrate --reset`

## TO Start the Truffle Server 
1. Make sure truffle is running in a terminal. If not then run truffle with the command: `truffle develop`
2. Open metamask and create accounts for voters and candidates

### TO Start the WebApp
1. Copy and paste the json file generated after migrating the contract in the src directory.
2. Install dependencies: `npm install`
3. Run the react app: `npm start`

