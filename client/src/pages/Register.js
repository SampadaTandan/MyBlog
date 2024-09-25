import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await fetch('http://localhost:4400/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <input 
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={ev => setConfirmPassword(ev.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
