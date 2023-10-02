import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, checkUserLogin } from '../../helpers/functions';
import { updateToken } from '../../helpers/functions';

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updateToken();
  }, []);

  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      {checkUserLogin() ? (
        <button onClick={() => {
          logout();
          navigate('/');
        }}>Logout</button>
      ) : (
        <>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </>
      )}
      <button onClick={() => navigate('/products')}>Products</button>
    </div>
  )
}

export default Navbar