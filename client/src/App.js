import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const register = () => {
    axios
      .post('http://localhost:4000/register', {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => console.log(response));
  };

  const login = () => {
    axios
      .post('http://localhost:4000/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
  };

  return (
    <div className='container'>
      <div className='registration'>
        <h1>Registration</h1>
        <div className='inp-wrap'>
          <div className='reg-inp user'>
            <label>Username</label>
            <input
              type='text'
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
          <div className='reg-inp pass'>
            <label>Password</label>
            <input
              type='text'
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
        </div>

        <div className='bt'>
          <button className='shrink-border' onClick={register}>
            Register
          </button>
        </div>
      </div>

      {/*---------------Log In-------------------------*/}

      <div className='login_container'>
        <h1>Login</h1>
        <div className='login_inp'>
          <input
            type='text'
            placeholder='Username...'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='Password...'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className='bt'>
          <button onClick={login}>Log in</button>
        </div>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
