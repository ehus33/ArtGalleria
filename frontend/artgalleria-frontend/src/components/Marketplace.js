import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch NFTs from the backend or blockchain
    const fetchNFTs = async () => {
      try {
        const response = await axios.get('/api/nfts');
        setNfts(response.data);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nfts.map((nft, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={nft.imageUrl} alt={nft.name} className="mb-4 w-full h-64 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2">{nft.name}</h2>
            <p className="text-gray-700 mb-2">Price: {nft.price} TRX</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
