const tronWeb = require('../config/tronweb');

// Example function to interact with a smart contract
async function mintNFT(toAddress, tokenId, tokenUri) {
  try {
    const contract = await tronWeb.contract().at('your_contract_address_here');
    const result = await contract.mint(toAddress, tokenId, tokenUri).send();
    console.log('NFT minted:', result);
  } catch (error) {
    console.error('Error minting NFT:', error);
  }
}

module.exports = { mintNFT };
