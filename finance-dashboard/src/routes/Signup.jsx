import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Logo.png';
import clockImage from '../assets/clock.png';
import useAuthStore from "../store/useAuthStore";

export default function Signup() {
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // call store signUp
    const signUp = useAuthStore.getState().signUp;
    const res = await signUp(email, password, name);
    if (res.success) {
      navigate('/');
    } else {
      alert(res.error?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-6xl mx-auto">
        {/* Sign In Content - 60% width */}
        <div className="w-[60%] px-8 py-12">
          <div className="max-w-md mx-auto space-y-8">
            {/* Logo and Header */}
            <div>
              <div className="flex items-center gap-2">
                <img className="h-8 w-8" src={logo} alt="Maglo" />
                <h2 className="text-2xl font-bold">Maglo.</h2>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Welcome back! Please enter your details
              </p>
            </div>

        {/* Sign In Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Mahfuzul Nabil"
                value={name}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember for 30 Days
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                Forgot password
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#E2FB5F] hover:bg-[#d4ec57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Create Account
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{' '}
            <Link to="/signin" className="font-medium text-emerald-600 hover:text-emerald-500">
              Sign in
            </Link>
          </div>
        </form>
          </div>
        </div>
        
        {/* Image Section - 40% width */}
        <div className="hidden lg:block w-[40%] relative bg-gray-50">
          <div className="absolute inset-0">
            <img 
              src={clockImage} 
              alt="Clock illustration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
