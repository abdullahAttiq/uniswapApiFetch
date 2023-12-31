const { ethers, JsonRpcProvider } = require('ethers');
const {infuraApi}=require("./private2")


const contractAddress = '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f';


const contractABI =[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];


const provider = new JsonRpcProvider(infuraApi);
const contract = new ethers.Contract(contractAddress, contractABI, provider);
contract.on('PairCreated', async (token0, token1, pairAddress, event) => {
    console.log('New pair created!');
    console.log('Token 0:', token0);
    console.log('Token 1:', token1);
    console.log('Pair Address:', pairAddress);
    console.log('Transaction Hash:', event.transactionHash);
  
    // Fetch pair contract
    const pairContract = new ethers.Contract(pairAddress, contractABI, provider);
  
    // Fetch liquidity
    const reserves = await pairContract.getReserves();
    const reserve0 = reserves[0].toString();
    const reserve1 = reserves[1].toString();
  
    console.log('Reserve 0:', reserve0);
    console.log('Reserve 1:', reserve1);
  });
  
  async function startListening() {
    console.log('Started listening for PairCreated events...');
  }
  
  startListening().catch((error) => {
    console.error('Error occurred while starting the listener:', error);
  });