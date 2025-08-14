import React, { useState } from "react";
import {
  UserMinus,
  Ban,
  Search,
  Filter,
  UserPlus,
  Image as ImageIcon,
} from "lucide-react";

export default function CustomersManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [customers, setCustomers] = useState([
    {
      id: "C001",
      firstName: "Suman",
      lastName: "Kumar",
      email: "suman@example.com",
      mobile: "+91 9876543210",
      gender: "Male",
      profile: "",
      joinedDate: "2025-08-10",
      blocked: false,
    },
    {
      id: "C002",
      firstName: "Rahul",
      lastName: "Sharma",
      email: "rahul@example.com",
      mobile: "+91 9876501234",
      gender: "Male",
      profile: "https://via.placeholder.com/150",
      joinedDate: "2025-08-14",
      blocked: false,
    },
  ]);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "Male",
    profile: "",
  });

  const getInitials = (first, last) =>
    (first?.[0] || "").toUpperCase() + (last?.[0] || "").toUpperCase();

  // Remove user
  const handleRemove = (id) => {
    setCustomers(customers.filter((cust) => cust.id !== id));
  };

  // Block user
  const handleBlock = (id) => {
    setCustomers(
      customers.map((cust) =>
        cust.id === id ? { ...cust, blocked: !cust.blocked } : cust
      )
    );
  };

  // Add user
  const handleAddUser = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    const newCustomer = {
      id: "C" + String(customers.length + 1).padStart(3, "0"),
      ...newUser,
      joinedDate: today,
      blocked: false,
    };
    setCustomers([...customers, newCustomer]);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      gender: "Male",
      profile: "",
    });
    setShowAddForm(false);
  };

  const filteredCustomers = customers.filter((cust) => {
    const searchMatch =
      cust.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.mobile.includes(searchTerm) ||
      cust.id.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = filterDate ? cust.joinedDate === filterDate : true;
    return searchMatch && dateMatch;
  });

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-3xl font-bold mb-8">👤 Customers</h1>

      {/* Search & Filter & Add */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4 relative">
        {/* Search */}
        <div className="flex items-center bg-white/70 backdrop-blur-md border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-1/2 shadow-sm">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search by name, email, mobile, or ID..."
            className="bg-transparent outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Icon */}
        <button
          onClick={() => setShowDateFilter(!showDateFilter)}
          className="flex items-center gap-2 px-4 py-2 bg-white/70 border border-gray-300 rounded-lg shadow-sm hover:bg-white transition"
        >
          <Filter size={18} className="text-gray-600" />
          <span className="text-gray-600">Filter</span>
        </button>

        {/* Add User Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 transition"
        >
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      {/* Date Filter Dropdown */}
      {showDateFilter && (
        <div className="absolute top-28 right-0 sm:right-auto sm:left-[55%] bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-50 animate-fadeIn">
          <label className="block text-gray-700 text-sm mb-2 font-medium">
            Select Date
          </label>
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <div className="flex justify-between mt-3">
            <button
              onClick={() => {
                setFilterDate("");
                setShowDateFilter(false);
              }}
              className="text-sm text-gray-500 hover:underline"
            >
              Clear
            </button>
            <button
              onClick={() => setShowDateFilter(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Add User Form with Slide Animation */}
      {showAddForm && (
        <form
          onSubmit={handleAddUser}
          className="bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-md mt-4 animate-slideDown"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
              value={newUser.firstName}
              onChange={(e) =>
                setNewUser({ ...newUser, firstName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
              value={newUser.lastName}
              onChange={(e) =>
                setNewUser({ ...newUser, lastName: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border p-2 rounded"
              value={newUser.mobile}
              onChange={(e) =>
                setNewUser({ ...newUser, mobile: e.target.value })
              }
              required
            />
            <select
              className="border p-2 rounded"
              value={newUser.gender}
              onChange={(e) =>
                setNewUser({ ...newUser, gender: e.target.value })
              }
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Profile Photo URL (optional)"
              className="border p-2 rounded"
              value={newUser.profile}
              onChange={(e) =>
                setNewUser({ ...newUser, profile: e.target.value })
              }
            />
          </div>

          {/* Profile Photo Preview */}
          {newUser.profile && (
            <div className="mt-4 flex items-center gap-3">
              <ImageIcon size={18} className="text-gray-500" />
              <img
                src={newUser.profile}
                alt="Preview"
                className="w-16 h-16 rounded-full border object-cover"
              />
            </div>
          )}

          <button
            type="submit"
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm"
          >
            Save User
          </button>
        </form>
      )}

      {/* Customer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {filteredCustomers.map((cust) => (
          <div
            key={cust.id}
            className={`rounded-2xl p-6 flex flex-col items-center border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              cust.blocked ? "opacity-50" : ""
            }`}
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,248,255,0.9))",
            }}
          >
            {/* ID */}
            <p className="text-xs text-gray-500 mb-1 font-mono">{cust.id}</p>

            {/* Profile */}
            {cust.profile ? (
              <img
                src={cust.profile}
                alt={`${cust.firstName} ${cust.lastName}`}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md border-4 border-white">
                {getInitials(cust.firstName, cust.lastName)}
              </div>
            )}

            {/* Name */}
            <h2 className="text-xl font-semibold mt-4">
              {cust.firstName} {cust.lastName}
            </h2>

            {/* Details */}
            <p className="text-gray-600 text-sm mt-1">{cust.mobile}</p>
            <p className="text-gray-600 text-sm">{cust.gender}</p>
            <p className="text-gray-600 text-sm truncate max-w-[200px]">
              {cust.email}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Joined: {cust.joinedDate}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleRemove(cust.id)}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-sm"
              >
                <UserMinus size={16} /> Remove
              </button>
              <button
                onClick={() => handleBlock(cust.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm shadow-sm ${
                  cust.blocked
                    ? "bg-gray-500 hover:bg-gray-600 text-white"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }`}
              >
                <Ban size={16} /> {cust.blocked ? "Unblock" : "Block"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
