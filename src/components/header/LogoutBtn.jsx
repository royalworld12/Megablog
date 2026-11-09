import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth.js';
import { Navigate, useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    authService.logout().then(() => {
      dispatch(logout());
       navigate("/login")
    }).catch((error) => {
      console.error('Error during logout:', error);
    });
  };

    return (
        <button onClick={handleLogout} className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    );
}

export default LogoutBtn;