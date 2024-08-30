const TronWeb = require('tronweb');
require('dotenv').config();

const tronWeb = new TronWeb({
  fullHost: process.env.TRON_NETWORK,
  privateKey: process.env.TRON_PRIVATE_KEY
});

module.exports = tronWeb;

