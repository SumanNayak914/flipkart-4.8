import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserRegister() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    address: ""
  });

  const [loading, setLoading] = useState(false);

  // Form field change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post(
        "http://localhost/ecom-backend/auth/register.php",
        form,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      // Success case
      if (res.data.message) {
        setLoading(false);
        toast.success(res.data.message, { position: "top-right" });
      }
    
      // Error case
      else if (res.data.error) {
          setLoading(false);
        toast.error(res.data.error, { position: "top-right" });
      }
    } catch (err) {
        setLoading(false);
      toast.error(err.response?.data?.error || "Something went wrong", {
        position: "top-right",
      });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div>
        <div className="hidden md:flex bg-gradient-to-b from-blue-500 to-blue-700 text-white flex-col justify-center items-center p-10 md:w-1/2">
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
        {/* Toast Container */}
        <ToastContainer />

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
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
              disabled={loading}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
              disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
              disabled={loading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
              disabled={loading}
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              disabled={loading}
          ></textarea>


{
  loading ? (<button disabled type="button" className=" w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition inline-flex items-center text-center justify-center">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>) : (<button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>)
}
          

          
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
          <ArrowLeft size={22} strokeWidth={2.5} />
          <p className="text-blue-500 font-bold">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}
