require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require ("dotenv").config();
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL=process.env.SEPOLIA_RPC_URL;
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY;
const PRIVATE_KEY=process.env.PRIVATE_KEY;


module.exports = {
    defaultNetwork: "hardhat",
    solidity: "0.8.18",

    gasReporter:{
     enabled:true,
     outputFile:"gas-report.txt",
     noColors:true,
     currency:"USD",
     coinmarketcap:COINMARKETCAP_API_KEY,
    },

    networks: {
        //  sepolia:{
        //    url:SEPOLIA_RPC_URL,
        //    accounts:[PRIVATE_KEY],
        //    chainId:11155111
        //  },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
};
