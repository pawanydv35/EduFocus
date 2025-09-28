import React, { useState } from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

export default function SignupPage() {
  const [role, setRole] = useState("student");

  return (
    <div className="flex min-h-screen">
      {/* Left Side (Image / Illustration) */}
      <div className="w-1/2 bg-yellow-400 flex items-center justify-center relative">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201818.png" // placeholder image
          alt="Student Illustration"
          className="w-2/3"
        />
        <h1 className="absolute top-5 left-5 text-white text-2xl font-bold">
          EdA
        </h1>
      </div>

      {/* Right Side (Form) */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-md">
          <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`w-1/2 py-2 rounded-full font-medium ${
                role === "student" ? "bg-yellow-400 text-white" : "text-gray-600"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("instructor")}
              className={`w-1/2 py-2 rounded-full font-medium ${
                role === "instructor"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-600"
              }`}
            >
              Instructor
            </button>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-yellow-500 cursor-pointer">
                  Terms of Service
                </span>{" "}
                &{" "}
                <span className="text-yellow-500 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Create Account
            </button>
          </form>

          {/* OR Continue With */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-2 text-gray-500 text-sm">or continue with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <FaGoogle className="text-xl text-red-500" />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <FaApple className="text-xl" />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <FaFacebookF className="text-xl text-blue-600" />
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
