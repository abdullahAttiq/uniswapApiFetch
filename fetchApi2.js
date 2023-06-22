const { request, gql } = require('graphql-request');


const fetchLatestPairs = async () => {
  const twentyFourHoursAgo = Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000); // Calculate the Unix timestamp representing 24 hours ago

  const query = gql`
    query {
      pairs(first: 10, orderBy: createdAtTimestamp, orderDirection: desc, where: { createdAtTimestamp_gt: "${twentyFourHoursAgo}" }) {
        id
        createdAtTimestamp
      }
    }
  `;

  const endpoint = 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2';

  try {
    const data = await request(endpoint, query);
    const latestPairs = data.pairs;

    console.log('Latest pairs created within the last 24 hours:', latestPairs);
  } catch (error) {
    console.error('Error fetching latest pairs:', error);
  }
};

fetchLatestPairs();
