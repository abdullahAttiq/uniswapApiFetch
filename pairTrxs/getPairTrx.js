// const { ethers } = require('ethers');
// const {infuraApi,
// 	pairABI,
//     wethABI,
//     pairAddress,
//     wethAdress}=require("./private")





// const provider = new ethers.providers.JsonRpcProvider(infuraApi);
// const pairContract = new ethers.Contract(wethAdress, wethABI, provider);
//     console.log("new transactions will now showing up the moment they happen")
// pairContract.on('Transfer', (from, to, value, event) => {
//     console.log('New Transaction:');
//     console.log('From:', from);
//     console.log('To:', to);
//     console.log('Value:', value);
//     console.log('Event:', event);
//   });




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
 
  
      
// const { ethers } = require('ethers');
// // const {web3}= require ('web3');
// const {infuraApi,
//     wethABI,

//     wethAdress}=require("./private")





// const provider = new ethers.providers.JsonRpcProvider(infuraApi);
// const pairContract = new ethers.Contract(wethAdress, wethABI, provider);
//     console.log("new transactions will now showing up the moment they happen")
//     pairContract.on('Swap', (sender, recipient, amount0, amount1, event) => {
//         const transactionIndex = event.transactionIndex;
      
   
      
//           console.log('Transaction Hash:', transaction.hash);
      
//           if (amount0 > 0 && amount1 === 0) {
//             console.log('Buy Transaction:');
//             console.log('Sender:', sender);
//             console.log('Recipient:', recipient);
//             console.log('Amount0:', amount0);
//             console.log('Amount1:', amount1);
//           } else if (amount1 > 0 && amount0 === 0) {
//             console.log('Sell Transaction:');
//             console.log('Sender:', sender);
//             console.log('Recipient:', recipient);
//             console.log('Amount0:', amount0);
//             console.log('Amount1:', amount1);
//           } else {
//             console.log('Unrecognized Transaction:');
//             console.log('Sender:', sender);
//             console.log('Recipient:', recipient);
//             console.log('Amount0:', amount0);
//             console.log('Amount1:', amount1);
//           }
//         });
     
      
      
  
  // NOVA pair =========>>>>>


        const { ethers } = require('ethers');



        const {infuraApi,
            novaAbi,
        
            novaAddress}=require("./private")
        
        
        
        
        
        const provider = new ethers.providers.JsonRpcProvider(infuraApi);
        const pairContract = new ethers.Contract(novaAddress, novaAbi, provider);
            console.log("new transactions will now showing up the moment they happen")


            pairContract.on('Swap', (sender, amount0In, amount1In, amount0Out, amount1Out, to,event) => {

                // const amount0InD = parseInt(amount0InHex, 16);
                // const amount1InD = parseInt(amount1InHex, 16);
                // const amount0OutD = parseInt(amount0OutHex, 16);
                // const amount1OutD = parseInt(amount1OutHex, 16);


                if (amount0In > 0 && amount1Out > 0) {
                console.log('Buy Request:');
                console.log('Sender:', sender);
              console.log('Amount0In:', parseInt(amount0In,16));
      console.log('Amount1Out:', parseInt(amount1Out,16));
                  console.log('To:', to);
                  console.log('trx hash', event.transactionHash);
                } else if (amount1In > 0 && amount0Out > 0) {
                  console.log('Sell Request:');
                   console.log('Sender:', sender);
                   console.log('Amount1In:', parseInt(amount1In,16));
                       console.log('Amount0Out:', parseInt(amount0Out,16));
                  console.log('To:', to);
                  console.log('trx hash', event.transactionHash);
                } else {
                  console.log('Unrecognized Request:');
                  console.log('Sender:', sender);
                  console.log('Amount0In:', parseInt(amount0In,16));
                    console.log('Amount1In:', parseInt(amount1In,16));
                  console.log('Amount0Out:', parseInt(amount0Out,16));
                  console.log('Amount1Out:', parseInt(amount1Out,16));
                  console.log('To:', to);
                  console.log('trx hash', event.transactionHash);
                }
              });
              


