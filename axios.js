// const axios = require('axios');



//   const URL = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

//   const query = `
//     query {
//       pairs(first: 10, orderDirection: desc,orderBy: createdAtTimestamp ) {
//         id
//         createdAtTimestamp
//       }
//     }
//   `;

//    axios.post(URL,{query:query})
//    .then((result)=>{
//     console.log(result.data.data)
//    })







// const axios = require('axios');

// const URL = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

// const query = `
//   query {
//     pairs(first: 10, orderDirection: desc, orderBy: createdAtTimestamp) {
//       id
//       createdAtTimestamp
//     }
//   }
// `;

// axios.post(URL, { query: query })
//   .then((result) => {
//     const pairsData = result.data.data.pairs;
//     const convertTimestamp = (timestamp) => {
//       const date = new Date(timestamp * 1000);
//       const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
//       return date.toLocaleString('en-US', options);
//     };
//     const convertedTimestamps = pairsData.map((pair) => {
//       const timestamp = parseInt(pair.createdAtTimestamp);
//       return convertTimestamp(timestamp);
//     });
//     console.log('Converted Timestamps:', convertedTimestamps);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });



// this is last working file

const axios = require('axios');

const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const query = `
  query {
    pairs(first: 10, orderDirection: desc, orderBy: createdAtTimestamp) {
      id
      createdAtTimestamp
    }
  }
`;

axios.post(URL, { query: query })
  .then((result) => {
    const pairsData = result.data.data.pairs;
    console.log('Fetched Pairs:', pairsData);

    const convertTimestamp = (timestamp) => {
      const date = new Date(timestamp * 1000);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return date.toLocaleString('en-US', options);
    };

    const convertedTimestamps = pairsData.map((pair) => {
      const timestamp = parseInt(pair.createdAtTimestamp);
      return convertTimestamp(timestamp);
    });

    console.log('Converted Timestamps:', convertedTimestamps);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
