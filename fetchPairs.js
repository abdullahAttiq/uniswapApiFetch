// const { request, gql } = require('graphql-request');

// const fetchPairs = async () => {
//   const endpoint = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';
//   const query = gql`
//     query pairs($skip: Int!) {
//       pairs(first: 1000, skip: $skip) {
//         id
//       }
//     }
//   `;
//   const batchSize = 1000; // Number of pairs to fetch per batch

//   let allPairs = [];
//   let skip = 0;
//   let shouldFetch = true;

//   while (shouldFetch) {
//     try {
//       const variables = { skip };
//       const data = await request(endpoint, query, variables);
//       const pairs = data.pairs;

//       if (pairs.length === 0) {
//         shouldFetch = false;
//       } else {
//         allPairs = allPairs.concat(pairs);
//         skip += batchSize;
//       }
//     } catch (error) {
//       console.error('Error fetching pairs:', error);
//       shouldFetch = false;
//     }
//   }

//   console.log('All pairs:', allPairs);
// };

// fetchPairs();





//querry 2 last 2 min 

const { request, gql } = require('graphql-request');

const fetchLatestPairs = async () => {
  const twoMinutesAgo = Math.floor((Date.now() - 60 * 60 * 1000) / 1000); // Calculate the Unix timestamp representing 2 minutes ago

  const query = gql`
    query {
      pairs(first: 10, orderBy: createdAtTimestamp, orderDirection: desc, where: { createdAtTimestamp_gt: "${twoMinutesAgo}" }) {
        id
        createdAtTimestamp
      }
    }
  `;

  const endpoint = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

  try {
    const data = await request(endpoint, query);
    const latestPairs = data.pairs;

    console.log('Latest pairs generated within the last 2 minutes:', latestPairs);
  } catch (error) {
    console.error('Error fetching latest pairs:', error);
  }
};

fetchLatestPairs();
