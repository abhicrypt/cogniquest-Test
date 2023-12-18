// App.js
import React, { useState } from 'react';
import LoginForm from './component/auth/Login';
import EmailForm from './component/pages/profile/Profile';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (enteredEmail) => {
    // Perform authentication logic (e.g., check credentials, verify captcha, etc.)
    const isAuthenticated = /* Your authentication logic here */ true;

    if (isAuthenticated) {
      setEmail(enteredEmail);
      setLoggedIn(true);
    } else {
      alert('Login failed. Please check your credentials and captcha.');
    }
  };

  return (
    <div className="app">
      {loggedIn ? (
        <EmailForm email={email} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
