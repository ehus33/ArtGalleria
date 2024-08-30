import React, { useState } from 'react';
import axios from 'axios';

const CreateNFT = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nftData = {
      name,
      imageUrl,
      price,
    };

    try {
      await axios.post('/api/nfts', nftData);
      alert('NFT created successfully!');
      setName('');
      setImageUrl('');
      setPrice('');
    } catch (error) {
      console.error('Error creating NFT:', error);
      alert('Failed to create NFT.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Create New NFT</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            NFT Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price (in TRX)
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create NFT
        </button>
      </form>
    </div>
  );
};

export default CreateNFT;
