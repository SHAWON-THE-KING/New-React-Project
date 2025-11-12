import React, { useState } from 'react';
import Loop from "../Pages/Loop";
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Blog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateGmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const validatePassword = (pw) => {
    // Minimum eight characters, at least one uppercase, one lowercase, one number and one special char
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return pwRegex.test(pw);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateGmail(username)) {
      setUsernameError('Please enter a valid Gmail address.');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      alert(`Logging in as ${username}`);
      setUsername('');
      setPassword('');
      setShowPassword(false);
    }
  };

  return (
    <div className="bg-primary py-40 min-h-screen flex items-center justify-center">
      <div className="container max-w-md bg-white p-8 rounded shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="username">Gmail:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                usernameError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="example@gmail.com"
            />
            {usernameError && <p className="text-red-600 mt-1">{usernameError}</p>}
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="At least 8 chars with mixed types"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-3 top-[42px] text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            {passwordError && <p className="text-red-600 mt-1">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Blog;
