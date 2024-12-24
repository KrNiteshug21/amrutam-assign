import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around items-center bg-orange-100 p-4">
      <div>
        <img src="/img/vectors/logo.svg" alt="Logo" />
      </div>
      <div className="flex gap-4 font-semibold text-green-800 text-lg">
        <Link to="/">Home</Link>
        <Link to="/doctors">Find Doctors</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4 text-lg">
        <button className="border-2 border-green-600 px-4 py-2 rounded-md font-medium text-green-600">
          Login
        </button>
        <button className="bg-green-600 px-4 py-2 rounded-md text-white">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
