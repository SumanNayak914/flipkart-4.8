import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      {/* Left Side */}
      <div className=" hidden md:flex bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center p-10 md:w-1/2">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl font-bold leading-tight">
            Simplify management With Our dashboard.
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Simplify your e-commerce management with our user-friendly admin
            dashboard.
          </p>
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
        <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Please login to your account</p>

        {/* Form */}
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
              👁
            </span>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center my-6 w-full max-w-sm">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">Or Login With</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Signup */}
        <p className="mt-6 text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Signup
          </a>
        </p>
        <Link to="/" className="flex font-semibold  text-gray-500 gap-2">
          <span>
            <ArrowLeft />
          </span>{" "}
          <p className="text-blue-500">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}
