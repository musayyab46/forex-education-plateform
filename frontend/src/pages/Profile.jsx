import React from 'react';

const Profile = () => {
  // You can fetch user data from localStorage or backend if needed
  const email = localStorage.getItem('userEmail') || 'johndoe@example.com';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">👤 Profile</h2>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> {email}</p>
        <p className="text-gray-700"><strong>Status:</strong> Logged in</p>
      </div>
    </div>
  );
};

export default Profile;
