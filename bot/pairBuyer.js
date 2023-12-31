const { ethers } = require("ethers");
const {routerContractABI}=require("./ABIs")
const {infuraApi}=require("./private")

async function buyPair(pairData) {
  
  const privateKeys = [
    "key 1",
    "key 2",
    
  ];

  for (const privateKey of privateKeys) {
    // Connect to the wallet using the private key
    const provider = new ethers.providers.JsonRpcProvider(infuraApi
    );
    const wallet = new ethers.Wallet(privateKey, provider);

   
    const { amountIn, amountOutMin, path, to, deadline } = pairData;

 
    const contractAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; 
    const contractABI = routerContractABI
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
    const tx = await contract.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      path,
      to,
      deadline,
      { gasLimit: 300000 } 
    );

    console.log("Buy transaction sent:", tx.hash);
    await tx.wait(); 
    console.log("Buy transaction mined!");
  }
}

module.exports = {
  buyPair,
};
