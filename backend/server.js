const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const TronWeb = require('tronweb');

const tronWeb = require('../config/tronWeb');


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const nftRoutes = require('./routes/nfts');
const userRoutes = require('./routes/users');

app.use('/api/nfts', nftRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const tronWeb = new TronWeb({
  fullHost: process.env.TRON_NETWORK,
  privateKey: process.env.PRIVATE_KEY // Make sure to set this in your .env file and never expose it in public repositories
});

module.exports = tronWeb;

exports.mintNFT = async (req, res) => {
  try {
    const { toAddress, tokenId, tokenUri } = req.body;
    
    const contract = await tronWeb.contract().at('your_contract_address_here');
    const result = await contract.mint(toAddress, tokenId, tokenUri).send();

    res.status(200).json({ message: 'NFT minted successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


