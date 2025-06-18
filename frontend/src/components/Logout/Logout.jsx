import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    // 🔐 Clear JWT tokens from localStorage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem("profile_toast_shown");

    // Optional: Redirect to login page
    navigate('/login');
  };

  return (
   
    <button
      onClick={handleLogout}
      className="bg-[#ddf5ff] dark:bg-[#444444]   pointer hover:bg-[#0000ff] hover:text-white text-black dark:text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
