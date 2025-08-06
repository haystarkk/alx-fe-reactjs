function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}
import React from 'react';

const UserProfile = () => {
  return (
    <div className="mx-auto p-4 md:p-8 max-w-xs md:max-w-sm bg-white rounded-lg shadow">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="mx-auto w-24 h-24 md:w-36 md:h-36 rounded-full object-cover mb-4"
      />
      <h2 className="text-lg md:text-xl font-semibold text-center mb-2">John Doe</h2>
      <p className="text-sm md:text-base text-center text-gray-600">
        Frontend Developer passionate about building beautiful and functional UIs.
      </p>
    </div>
  );
};

export default UserProfile;
