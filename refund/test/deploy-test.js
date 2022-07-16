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
    assert.equal(currentValue.toString(), expectValue);
  });

  it("Should create an employee with the given details", async () => {
    const tx = await refund.createEmployee(
      "0x3AB46836Ca9e5A5b517017bE886b6deB7Bab575F",
      "Abe",
      "142",
      "56",
      "1"
    );
    await tx.wait(1);
    const currentValue = await refund.getEmployeeDetail(
      "0x3AB46836Ca9e5A5b517017bE886b6deB7Bab575F"
    );
    const expectValue = ["Abe", 142, 56, 1];
    // assert
    console.log(currentValue);
    assert.equal(currentValue[0].toString(), expectValue[0]);
    assert.equal(currentValue[1].toString(), expectValue[1]);
    assert.equal(currentValue[2].toString(), expectValue[2]);
    assert.equal(currentValue[3].toString(), expectValue[3]);
  });
});
