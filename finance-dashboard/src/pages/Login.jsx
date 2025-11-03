import React, { useState } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await account.createEmailSession(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials or network issue");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 px-10">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details
          </p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <div>
                <input type="checkbox" className="mr-2" />
                Remember for 30 Days
              </div>
              <a href="#" className="text-lime-500 hover:underline">
                Forgot password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-2 rounded-lg font-semibold hover:bg-lime-500 transition"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-lime-500 font-semibold">
              Sign up for free
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 bg-gray-100 justify-center items-center">
        <img
          src="/clock-image.png"
          alt="Clock illustration"
          className="max-w-xs"
        />
      </div>
    </div>
  );
}
