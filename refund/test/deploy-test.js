const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("Refund", () => {
  let refundFactory, refund;
  beforeEach(async () => {
    refundFactory = await ethers.getContractFactory("Refund");
    refund = await refundFactory.deploy();
  });

  it("should deploy the contract", async () => {
    const Refund = await ethers.getContractFactory("Refund");
    const refund = await Refund.deploy();
    assert.isDefined(refund.address);
  }).timeout(10000);

  it("Should have the given public address as the owner", async () => {
    const currentValue = await refund.getOwner();
    const expectValue = "0x821a33B8C77AB501b5c7269DF73D80Db82048Eb2";
    // assert
    // expect
    assert.equal(currentValue.toString(), expectValue);
  });

  
});
