import React from 'react';

function UserProfile() {
  return (
    <div className="bg-white rounded-lg shadow-md sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto mt-10 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
      />
      <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">John Doe</h2>
      <p className="mt-2 text-sm md:text-base text-gray-600">Web Developer</p>
    </div>
  );
}

export default UserProfile;
