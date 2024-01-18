// LoginForm.js
import React, { useState } from 'react';
import Captcha from './Captcha';
import './LoginForm.css';
import { Link, Redirect } from 'react-router-dom'

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if captcha is entered correctly
    if (captchaValue === 'I am not a robot') {
      onLogin(email);
    } else {
      alert('Please complete the captcha.');
    }
  };

  return (
    <>
    <h2 className='brand-text text-primary mx-3 mt-2'>Abhishek.Dev</h2>
    <div className='container'>

    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </>
        <>
        <label>Password:</label>
        <href to='/'>
                    <small>Forgot Password?</small>
                  </href>
        <input
          type="password"
        //   value={password}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       
        </>
        <Captcha value={captchaValue} onChange={setCaptchaValue} />
        <button type="submit">Login</button>
      </form>
      <p className='text-center mt-2'>
              <span className='mr-25'>New on our platform?</span>
              < >
                <span>Create an account</span>
              </>
            </p>
    </div>
    </div>
    </>
  );
};

export default LoginForm;
