// // const { request, gql } = require('graphql-request');

// // const query = gql`
// //   query {
// //     pairs(first: 10, orderBy: createdAtTimestamp, orderDirection: desc) {
// //       id
// //       token0 {
// //         id
// //         symbol
// //       }
// //       token1 {
// //         id
// //         symbol
// //       }
// //     }
// //   }
// // `;

// // const endpoint = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

// // request(endpoint, query)
// //   .then((data) => {
// //     console.log(data.pairs);
// //   })
// //   .catch((error) => {
// //     console.error('Error fetching pairs:', error);
// //   });



// const { request, gql } = require('graphql-request');

// const fetchPairs = async () => {
//   const pageSize = 1000; // Number of pairs to fetch per page
//   let skip = 2000; // Initial skip value
//   let allPairs = []; // Array to store all pairs

//   const query = gql`
//     query pairs($skip: Int!) {
//       pairs(first: ${pageSize}, skip: $skip) {
//         id
//       }
//     }
//   `;

//   const endpoint = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

//   try {
//     while (true) {
//       const variables = { skip };
//       const data = await request(endpoint, query, variables);

//       const pairs = data.pairs;
//       if (pairs.length === 0) {
//         // No more pairs to fetch, break the loop
//         break;
//       }

//       allPairs.push(...pairs);
//       skip += pageSize;
//     }

//     console.log('All pairs:', allPairs);
//   } catch (error) {
//     console.error('Error fetching pairs:', error);
//   }
// };

// fetchPairs();

const { request, gql } = require('graphql-request');


const query = gql`
  query {
    query pairs($skip: Int!) {
      pairs(first: 1000, skip: $skip) {
        id
      }
    }
   }
`;


const endpoint = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

request(endpoint, query)
  .then((data) => {
    console.log(data.pairs);
  })
  .catch((error) => {
    console.error('Error fetching pairs:', error);
  });

