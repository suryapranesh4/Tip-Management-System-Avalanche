const hre = require("hardhat")

const main = async () => {
    const TipMe = await hre.ethers.getContractFactory("TipMe")
    const tipMe = await TipMe.deploy()

    await tipMe.deployed()

    console.log(`TipMe contract deployed to ${tipMe.address}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
