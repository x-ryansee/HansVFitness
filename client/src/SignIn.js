import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

function SignIn({ user, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) {
          setUser(data);
          navigate('/home');
        } else {
          setError(data.error);
        }
      });
  };

  const logout = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setUser(null);
        navigate('/');
      });
  };

  return (
    <div>
      <div style={{ margin: '80px' }} className="modalParent">
        {user ? (
          <button className="button-create" onClick={logout}>
            Logout
          </button>
        ) : null}
        <div>
          <h1>Welcome {user ? ` ${user.name}` : null}</h1>
          {user ? <Home /> : null}
        </div>
        {user === null ? (
          <div className="sign-in-form">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={login}>
              <label htmlFor="signInName">Email</label>
              <input
                id="signInName"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <br />
              <label htmlFor="signInPassword">Password</label>
              <input
                type="password"
                id="signInPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <br />
              <div className="button-container">
                <input className="inputCreate" type="submit" value="Sign In" />
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SignIn;
