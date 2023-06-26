// const { ethers, JsonRpcProvider } = require("ethers");

// const { contractABI } = require("./ABIs");

// const contractAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f";

// const provider = new JsonRpcProvider(
// 	infuraApi
// );

// const contract = new ethers.Contract(contractAddress, contractABI, provider);
// contract.on("PairCreated", (token0, token1, pair, noname, event) => {
// 	console.log("New pair created!");
// 	provider
// 		.getTransaction(event.log.transactionHash)
// 		.then((transaction) => {
// 			if (Number(transaction.value) > 0) {
// 				console.log("Liquidty added!");
// 				console.log("Token 0:", token0);
// 				console.log("Token 1:", token1);
// 				console.log("Pair:", pair);
// 				console.log("Transaction Hash:", event.log.transactionHash);
// 				console.log(
// 					"Liquqidity:",
// 					ethers.formatEther((Number(transaction.value) * 2).toString()),
// 					" ETH"
// 				);
// 			}
// 		})
// 		.catch((error) => {
// 			console.error("Error:", error);
// 		});
// });



const { ethers, JsonRpcProvider } = require("ethers");
const axios = require("axios");
const { contractABI } = require("./ABIs");
const {infuraApi}=require("./private2")

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
      console.log("Liquidty added!");
      console.log("Token 0:", token0);
      console.log("Token 1:", token1);
      console.log("Pair:", pair);
      console.log("Transaction Hash:", event.log.transactionHash);
      console.log(
        "Liquidity:",
        ethers.formatEther((Number(transaction.value) * 2).toString()),
        "ETH"
      );

      
	  
      const apiEndpoint = apiUrl.replace("{chain_id}", 1);
      const params = {
        contract_addresses: token0,
      };

      const response = await axios.get(apiEndpoint, { params });
      const pairData = response.data;

      console.log("Pair Data:", pairData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});


// rug pull api 

// const { ethers, JsonRpcProvider } = require("ethers");
// const axios = require("axios");
// const { contractABI } = require("./ABIs");

// const contractAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f";
// const apiUrl = "https://api.gopluslabs.io/api/v1/rugpull_detecting/56";

// const provider = new JsonRpcProvider(
//   infuraApi
// );

// const contract = new ethers.Contract(contractAddress, contractABI, provider);

// contract.on("PairCreated", async (token0, token1, pair, noname, event) => {
//   console.log("New pair created!");

//   try {
//     const transaction = await provider.getTransaction(event.log.transactionHash);
//     if (Number(transaction.value) > 0) {
//       console.log("Liquidty added!");
//       console.log("Token 0:", token0);
//       console.log("Token 1:", token1);
//       console.log("Pair:", pair);
//       console.log("Transaction Hash:", event.log.transactionHash);
//       console.log(
//         "Liquidity:",
//         ethers.formatEther((Number(transaction.value) * 2).toString()),
//         "ETH"
//       );

//       // Make API request to fetch data for the pair
//       const apiEndpoint = `${apiUrl}?contract_addresses=${token0}`;

//       const response = await axios.get(apiEndpoint);
//       const pairData = response.data;

//       console.log("Pair Data:", pairData);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });

// const axios = require("axios"); 
//       const apiUrl = "https://api.gopluslabs.io/api/v1/rugpull_detecting/56";
//       const apiEndpoint = `${apiUrl}?contract_addresses=0x0f23d49bc92ec52ff591d091b3e16c937034496e`;

//       const response =  axios.get(apiEndpoint);
//       const pairData = response.data;
//     if (pairData!=undefined){
//       console.log("Pair Data:", pairData);
// 	}




// const { ethers, JsonRpcProvider } = require("ethers");
// const axios = require("axios");
// const { contractABI } = require("./ABIs");
// const { GoPlus, ErrorCode } =require ('goplus-sdk-js');

// const contractAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f";
// //const apiUrl = "https://api.gopluslabs.io/api/v1/rugpull_detecting/56";

// const provider = new JsonRpcProvider(
//   infuraApi
// );

// const contract = new ethers.Contract(contractAddress, contractABI, provider);

// contract.on("PairCreated", async (token0, token1, pair, noname, event) => {
//   console.log("New pair created!");

//   try {
//     const transaction = await provider.getTransaction(event.log.transactionHash);
//     if (Number(transaction.value) > 0) {
//       console.log("Liquidty added!");
//       console.log("Token 0:", token0);
//       console.log("Token 1:", token1);
//       console.log("Pair:", pair);
//       console.log("Transaction Hash:", event.log.transactionHash);
//       console.log(
//         "Liquidity:",
//         ethers.formatEther((Number(transaction.value) * 2).toString()),
//         "ETH"
//       );

//       // Make API request to fetch data for the pair
// 	  let chainId = '1';
	  
// 	  // It will only return 1 result for the 1st token address if not called getAccessToken before
// 	  let ret = await GoPlus.tokenSecurity(chainId, token0);
	  
// 	  if (ret.code != ErrorCode.SUCCESS) {
// 		  console.error(ret.message);
// 	  } else {

// 		  console.log(ret.result);
// 	  }
	  
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });


