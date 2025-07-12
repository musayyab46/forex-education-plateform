import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ correct import

const AuthCard = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // ✅ call it inside the component

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!trimmedPassword || trimmedPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (type === "signup" && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Redirect after success
    if (type === 'login') {
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Signup successful');
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">{type === 'login' ? 'Login' : 'Sign Up'}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {type === 'signup' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
          >
            {type === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          <p className="text-sm">
            {type === 'login' ? (
              <span>Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></span>
            ) : (
              <span>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
