const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", () => {
    let simpleStorageFactory, simpleStorage
    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favourite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve()
        const expectValue = "0"
        // assert
        // expect
        assert.equal(currentValue.toString(), expectValue)
    })

    it("should be update when we call store", async () => {
        const expectedValue = "42"
        const tx = await simpleStorage.store(expectedValue)
        await tx.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })

    // it("should deploy the contract", async () => {
    //     const SimpleStorage = await ethers.getContractFactory("SimpleStorage")
    //     const simpleStorage = await SimpleStorage.deploy()
    //     assert.isDefined(simpleStorage.address)
    // }).timeout(10000)
})
