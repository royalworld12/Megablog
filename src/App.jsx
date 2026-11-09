import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import authService from './appwrite/auth.js';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
      }).finally(() => {
        setLoading(false);
      });
  }, []);


  
    return  !loading ? (
      <div className="flex flex-wrap content-between min-h-screen bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            {<Outlet />}
          </main>
          <Footer />
          </div>
        </div>) : null


  
}

export default App
