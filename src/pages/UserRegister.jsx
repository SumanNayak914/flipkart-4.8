import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserRegister() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
     <div>
         <div className="hidden md:flex bg-gradient-to-b  from-blue-500 to-blue-700 text-white flex-col justify-center items-center p-10 md:w-1/2">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl font-bold leading-tight">
            Start your journey with our platform.
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Manage your e-commerce with ease — create your free account today.
          </p>
        </div>
      </div>
     </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center p-8 md:w-1/2">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="bg-blue-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold">flipkart</h1>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold mb-1">Create Your Account</h2>
        <p className="text-gray-500 mb-6">
          Please fill in the details to register
        </p>

        {/* Form */}
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center my-6 w-full max-w-sm">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">Or Sign Up With</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Login Link */}
        <p className="mt-6 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/UserLogin"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <Link
          to="/"
          className="flex font-semibold text-gray-500 gap-2 mt-4 items-center"
        >
          <ArrowLeft size={22} strokeWidth={2.5} /> {/* Bigger + thicker */}
          <p className="text-blue-500 font-bold">Back to Home</p>{" "}
          {/* Bolder text */}
        </Link>
      </div>
    </div>
  );
}
