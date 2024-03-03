const { ethers } = require("ethers");

const main = async () => {
  const tenderFactory = await hre.ethers.getContractFactory("openTender"); // Replace "YourTenderContractName" with the actual name of your tender contract
  const tenderContract = await tenderFactory.deploy();

  await tenderContract.deployed();

  console.log("Tender contract address: ", tenderContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
