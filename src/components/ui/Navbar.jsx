import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, checkUserLogin } from '../../helpers/functions';

const Navbar = () => {
  const navigate = useNavigate();

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
    </div>
  )
}

export default Navbar