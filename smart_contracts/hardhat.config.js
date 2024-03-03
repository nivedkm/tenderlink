require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-65ilZSDaxPz-CesrC9wAEAYPs_6w3MD",
      accounts: [
        "14ca743e6fe4320bd667f5344d751756fa16940593cca0f9ace8fd236098bb29",
      ],
    },
  },
};
