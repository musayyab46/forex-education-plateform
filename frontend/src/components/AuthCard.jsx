import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthCard = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // ✅ Main submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ✅ Validation
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

    try {
      if (type === 'login') {
        // ✅ Send login request
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });

        alert("Login successful!");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userEmail", email);
        console.log("Token:", res.data.token); // You can save it in localStorage if needed
        navigate('/dashboard');

      } else {
        // ✅ Send signup request
        const res = await axios.post("http://localhost:5000/api/auth/signup", {
          email,
          password,
        });
        localStorage.setItem("userEmail", email); // ✅ Save on signup as well


        alert("Signup successful!");
        console.log(res.data);
        navigate('/login');
      }
    } catch (error) {
      console.error("Auth error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Authentication failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          {type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm your password"
                required
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
