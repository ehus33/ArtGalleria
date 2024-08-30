module.exports = {
    networks: {
      development: {
        privateKey: process.env.TRON_PRIVATE_KEY,
        consume_user_resource_percent: 30,
        fee_limit: 1e8,
        fullHost: "http://127.0.0.1:9090",
        network_id: "*"
      },
      shasta: {
        privateKey: process.env.TRON_PRIVATE_KEY,
        consume_user_resource_percent: 30,
        fee_limit: 1e8,
        fullHost: "https://api.shasta.trongrid.io",
        network_id: "*"
      },
      mainnet: {
        // For Mainnet deployment
        privateKey: process.env.TRON_PRIVATE_KEY,
        consume_user_resource_percent: 30,
        fee_limit: 1e8,
        fullHost: "https://api.trongrid.io",
        network_id: "*"
      }
    },
    compilers: {
      solc: {
        version: "0.8.0"
      }
    }
  };
  