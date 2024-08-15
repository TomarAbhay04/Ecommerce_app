// src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from '../firebase.js';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');  // Navigate to home page after successful login
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-3xl font-semibold mb-6">Welcome to E-commerce</h1>
      <button 
        onClick={handleLogin} 
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
