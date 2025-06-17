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
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
