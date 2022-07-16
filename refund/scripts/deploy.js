// imports
const { ethers, run, network } = require("hardhat");

// async main
async function main() {
  const Refund = await ethers.getContractFactory("Refund");
  console.log("Deploying Refund...");
  const refund = await Refund.deploy();
  await refund.deployed();
  console.log("Refund contract deployed at:", refund.address);
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    await refund.deployTransaction.wait(6);
    await verify(refund.address, []);
    console.log("Verified contract");
  }
}

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract already verified");
    } else {
      console.log(error);
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
