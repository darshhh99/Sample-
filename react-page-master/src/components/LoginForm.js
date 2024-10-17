import React, { useState } from 'react';
import './css/LoginForm.css'; // Adjusted import path to reflect new location

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login submitted: Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 col-sm-8 col-12"> {/* More responsive column classes */}
          <div className="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12 text-center">
                <h4 className="mb-3">Login</h4>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>
              <div className="col-12 mt-3">
                <p className="text-center">
                  <a href="#">Forgot Password?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
