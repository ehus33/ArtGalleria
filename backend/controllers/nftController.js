const NFT = require('../models/NFT');
const User = require('../models/User');
const { mintNFT } = require('../services/nftService');

// Create a new NFT
exports.createNFT = async (req, res) => {
  try {
    const { name, imageUrl, price, ownerId } = req.body;
    const owner = await User.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    const nft = new NFT({
      name,
      imageUrl,
      price,
      owner: owner._id,
    });

    await nft.save();
    res.status(201).json(nft);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all NFTs
exports.getNFTs = async (req, res) => {
  try {
    const nfts = await NFT.find().populate('owner', 'name email');
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get NFT by ID
exports.getNFTById = async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id).populate('owner', 'name email');
    if (!nft) {
      return res.status(404).json({ message: 'NFT not found' });
    }
    res.status(200).json(nft);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.createNFT = async (req, res) => {
    try {
      const { name, imageUrl, price, ownerId, tokenId, tokenUri } = req.body;
      const owner = await User.findById(ownerId);
      if (!owner) {
        return res.status(404).json({ message: 'Owner not found' });
      }
  
      // Call the mintNFT function to mint the NFT on the TRON blockchain
      const blockchainResult = await mintNFT(owner.walletAddress, tokenId, tokenUri);
  
      // Save the NFT details in the database
      const nft = new NFT({
        name,
        imageUrl,
        price,
        owner: owner._id,
      });
  
      await nft.save();
      res.status(201).json({ nft, blockchainResult });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
};
  