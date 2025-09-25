// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="text-2xl font-handwriting font-bold text-black">
        EdA
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center w-[300px] border border-yellow-400 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="What do you want to learn"
          className="flex-1 px-4 py-2 outline-none text-sm"
        />
        <button className="bg-yellow-400 p-2 px-4">
          <span className="text-white font-bold">{'➔'}</span>
        </button>
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 border rounded-md">Login</button>
        <button className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
