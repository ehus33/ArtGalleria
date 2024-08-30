import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`/api/users/${userId}`);
        setUser(userResponse.data);
        const nftResponse = await axios.get(`/api/users/${userId}/nfts`);
        setNfts(nftResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">{user.name}'s Profile</h1>
      <h2 className="text-2xl mb-4">Owned NFTs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nfts.map((nft, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={nft.imageUrl} alt={nft.name} className="mb-4 w-full h-64 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold">{nft.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
