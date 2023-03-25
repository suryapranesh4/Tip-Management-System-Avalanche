require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

console.log(process.env.QUICKNODE_URL, process.env.PRIVATE_KEY);

module.exports = {
  solidity: "0.8.17",
  networks: {
    fuji: {
      url: process.env.QUICKNODE_URL,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 43113,
    },
  },
};
