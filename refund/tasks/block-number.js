const { task } = require("hardhat/config");

// block-number task

task("block-number", "Get the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
  }
);

module.exports = {};
