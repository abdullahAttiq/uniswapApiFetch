const axios = require('axios');

const URL = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

const query = `
  query {
    pairs(first: 100, orderDirection: asc, orderBy: createdAtTimestamp) {
      id
      createdAtTimestamp
    }
  }
`;

axios.post(URL, { query: query })
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
