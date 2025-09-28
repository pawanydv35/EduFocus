import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section (Login Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-4/5 max-w-md">
          {/* Logo */}
          <h1 className="text-yellow-500 text-2xl font-bold mb-8">EdA</h1>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          {/* Email Input */}
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-3 mb-4 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Password Input */}
          <label className="block mb-1 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute right-3 top-3 cursor-pointer">👁️</span>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mt-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Remember Me
            </label>
            <p className="text-red-500 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md mt-6 hover:bg-yellow-500">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <span className="w-1/4 border-t border-gray-300"></span>
            <span className="mx-2 text-gray-400 text-sm">or continue with</span>
            <span className="w-1/4 border-t border-gray-300"></span>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-6">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <FaGoogle className="text-red-500" size={20} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <FaApple className="text-black" size={22} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <FaFacebookF className="text-blue-600" size={20} />
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>

      {/* Right Section (Illustration) */}
      <div className="hidden md:flex w-1/2 bg-yellow-400 items-center justify-center">
        <img
          src="/illustration.png"
          alt="Learning Illustration"
          className="w-3/4 max-w-lg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
