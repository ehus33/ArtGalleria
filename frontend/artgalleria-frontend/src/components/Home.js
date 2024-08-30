import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to ArtGalleria</h1>
      <p className="text-lg text-center mb-4">
        Discover, collect, and sell extraordinary digital art NFTs on the TRON blockchain.
      </p>
      <div className="flex space-x-4">
        <Link to="/marketplace">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Marketplace</button>
        </Link>
        <Link to="/create-nft">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Create NFT</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
