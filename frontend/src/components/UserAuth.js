import React, { useState } from 'react';
import axios from 'axios';

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/api/signin', { email, password });
      
      if (response.status === 200) {
        console.log('User signed in successfully');
      } else {
        console.log('Sign-in failed');
      }
    } catch (error) {
      console.log('Error signing in:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default UserAuthentication;
