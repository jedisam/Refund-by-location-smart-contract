// imports
const { ethers, run, network } = require("hardhat");

// async main
async function main() {
  const Refund = await ethers.getContractFactory("Refund");
  console.log("Deploying Refund...");
  const refund = await Refund.deploy();
  await refund.deployed();
  console.log("Refund contract deployed at:", refund.address);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
