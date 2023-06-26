const { ethers, JsonRpcProvider } = require("ethers");
const axios = require("axios");
const { contractABI } = require("./ABIs");
const { buyPair } = require("./pairBuyer");
const {infuraApi}=require("./private")

const contractAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f";
const apiUrl = "https://api.gopluslabs.io/api/v1/token_security/{chain_id}";

const provider = new JsonRpcProvider(
  infuraApi
);

const contract = new ethers.Contract(contractAddress, contractABI, provider);

contract.on("PairCreated", async (token0, token1, pair, noname, event) => {
  console.log("New pair created!");

  try {
    const transaction = await provider.getTransaction(event.log.transactionHash);
    if (Number(transaction.value) > 0) {
      console.log("Liquidity added!");
      console.log("Token 0:", token0);
      console.log("Token 1:", token1);
      console.log("Pair:", pair);
      console.log("Transaction Hash:", event.log.transactionHash);
      console.log(
        "Liquidity:",
        ethers.utils.formatEther((Number(transaction.value) * 2).toString()),
        "ETH"
      );

      const apiEndpoint = apiUrl.replace("{chain_id}", 1);
      const params = {
        contract_addresses: token0,
      };

      const response = await axios.get(apiEndpoint, { params });
      const pairData = response.data;

      console.log("Pair Data:", pairData);

      await buyPair(pairData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
