const HDWalletProvider = require('@truffle/hdwallet-provider');
const memonic ="couch hunt live layer country medal crouch peace worry stool rural rubber" ;
const inuraProjectId ="a9b12c1699184471918a849b71542098"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },
  
  networks: {
    Sepolia:{
      provider: () => new HDWalletProvider(memonic,`https://sepolia.infura.io/v3/${inuraProjectId}`),
      network_id: 11155111,
      chain_id: 11155111,
      gas: 30000000,
      confirmation: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    develop: {
      port: 8545
    }
  }
};