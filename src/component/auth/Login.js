// LoginForm.js
import React, { useState } from 'react';
import Captcha from './Captcha';
import './LoginForm.css';

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
    </div>
    </div>
  );
};

export default LoginForm;
