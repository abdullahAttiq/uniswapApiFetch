const { ethers } = require('ethers');
const {infuraApi,pairABI, pairABI}=require("./private")



const pairAddress = '0x21b8065d10f73EE2e260e5B47D3344d3Ced7596E';

const provider = new ethers.providers.JsonRpcProvider(infuraApi);
const pairContract = new ethers.Contract(pairAddress, pairABI, provider);
    console.log("new transactions will now showing up the moment they happen")
pairContract.on('Transfer', (from, to, value, event) => {
    console.log('New Transaction:');
    console.log('From:', from);
    console.log('To:', to);
    console.log('Value:', value);
    console.log('Event:', event);
  });
 
  
  
  
  
  