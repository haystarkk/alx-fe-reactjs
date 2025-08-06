import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto mt-10 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h2>
      <p className="mt-2 text-sm md:text-base text-gray-600">Web Developer</p>
    </div>
  );
}

export default UserProfile;
