import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAccount } from '../../store/account/accountActions';
import { clearStatusState } from '../../store/account/accountSlice';


const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { loading, status } = useSelector(state => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <>  
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {status ? (
            <>
              <h3>An error occured!</h3>
              <button onClick={() => dispatch(clearStatusState())}>Try again!</button>
            </>
          ) : (
            <>
              <h3>Register Form</h3>
              <input type="text" placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />

              <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />

              <button onClick={() => dispatch(registerAccount({ user, navigate }))}>Register</button>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Register