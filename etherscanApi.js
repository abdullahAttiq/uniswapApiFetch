const axios = require('axios');

const apiKey = 'N1T366MJ266A3AJH7BSZDZJNSTDUA239SI';
const factoryContractAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

// Step 1: Get the total number of Uniswap V2 pairs
async function getTotalPairs() {
  const functionSignature = '0xc45a0145';
  const url = `https://api.etherscan.io/api?module=proxy&action=eth_call&to=${factoryContractAddress}&data=${functionSignature}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const result = response.data.result;
    const totalPairs = parseInt(result, 16);
    return totalPairs;
  } catch (error) {
    console.error('Error retrieving total number of pairs:', error);
    throw error;
  }
}

// Step 2: Get the addresses of all Uniswap V2 pairs
async function getPairAddresses() {
  const totalPairs = await getTotalPairs();
  const functionSignature = '0x18160ddd';

  const pairAddresses = [];

  for (let i = 0; i < totalPairs; i++) {
    const pairIndexHex = i.toString(16).padStart(64, '0');
    const data = `${functionSignature}${pairIndexHex}`;

    const url = `https://api.etherscan.io/api?module=proxy&action=eth_call&to=${factoryContractAddress}&data=${data}&apikey=${apiKey}`;

    try {
      const response = await axios.get(url);
      const result = response.data.result;
      const pairAddress = '0x' + result.slice(26);
      pairAddresses.push(pairAddress);
    } catch (error) {
      console.error('Error retrieving pair address:', error);
    }
  }

  return pairAddresses;
}

// Usage example
getPairAddresses()
  .then((pairAddresses) => {
    console.log('Uniswap V2 Pair Addresses:', pairAddresses);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
