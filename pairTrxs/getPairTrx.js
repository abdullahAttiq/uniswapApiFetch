const { ethers } = require('ethers');
const {infuraApi,pairABI}=require("./private")



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




  //to only fetch buy trx 

  
//   pairContract.on('Swap', (sender, amount0In, amount1In, amount0Out, amount1Out, to) => {
//     console.log('Buy Transaction:');
//     console.log('Sender:', sender);
//     console.log('Amount0In:', amount0In);
//     console.log('Amount1In:', amount1In);
//     console.log('Amount0Out:', amount0Out);
//     console.log('Amount1Out:', amount1Out);
//     console.log('To:', to);
//   });
 
  
  
  
  
  