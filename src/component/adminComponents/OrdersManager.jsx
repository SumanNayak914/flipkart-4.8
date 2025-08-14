import React, { useState } from "react";
import { Search, Filter, Calendar } from "lucide-react"; // icons

export default function OrdersManager() {
  const [orders, setOrders] = useState([
    {
      id: "#1001",
      customer: "Suman",
      product: "Nike Air Shoes",
      quantity: 2,
      amount: "₹1,200",
      status: "Delivered",
      address: "123 MG Road, Delhi",
      date: "2025-08-10",
      payment: "UPI",
    },
    {
      id: "#1002",
      customer: "Rahul",
      product: "Apple iPhone 14",
      quantity: 1,
      amount: "₹90,000",
      status: "Pending",
      address: "45 Park Street, Kolkata",
      date: "2025-08-12",
      payment: "Credit Card",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const statusOptions = ["Pending", "Shipped", "Delivered", "Cancelled"];

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter ? o.status === statusFilter : true;
    const matchesDate = dateFilter ? o.date === dateFilter : true;
    return matchesSearch && matchesStatus && matchesDate;
  });

  const handleSave = () => {
    setOrders((prev) =>
      prev.map((o) => (o.id === editingOrder.id ? editingOrder : o))
    );
    setEditingOrder(null);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 font-[Poppins]">
      <h1 className="text-3xl font-bold mb-6">🛒 Orders Management</h1>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by Order ID, Customer, or Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none font-semibold"
          />
        </div>

        <div className="relative">
          <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none font-semibold"
          >
            <option value="">All Status</option>
            {statusOptions.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>

        {/* Date Filter Icon Only */}
        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="border rounded-lg px-3 py-2 flex items-center justify-center hover:bg-gray-100"
          >
            <Calendar size={18} className="text-gray-500" />
          </button>
          {showDatePicker && (
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => {
                setDateFilter(e.target.value);
                setShowDatePicker(false);
              }}
              className="absolute top-10 left-0 border rounded-lg px-3 py-2 bg-white shadow-md"
            />
          )}
        </div>
      </div>

      {/* Orders List */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">{order.id}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-bold ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-gray-700 font-semibold">
              Customer: {order.customer}
            </p>
            <p className="text-gray-700 font-semibold">
              Product: {order.product}{" "}
              <span className="text-sm text-gray-500">x{order.quantity}</span>
            </p>
            <p className="text-gray-700 font-semibold">Amount: {order.amount}</p>
            <p className="text-gray-700 font-semibold">Date: {order.date}</p>
            <p className="text-gray-700 font-semibold">Payment: {order.payment}</p>
            <p className="text-gray-700 font-semibold">Address: {order.address}</p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setEditingOrder(order)}
                className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 text-sm font-bold"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Side Drawer Edit with Rounded Corners + Margin */}
      {editingOrder && (
        <div className="fixed inset-0 flex justify-end bg-black/30 z-50">
          <div className="bg-white w-full max-w-md h-[95%] m-4 rounded-xl shadow-xl p-6 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Order</h2>

            <label className="block mb-2 font-semibold">Customer Name</label>
            <input
              type="text"
              value={editingOrder.customer}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, customer: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-3 font-semibold"
            />

            <label className="block mb-2 font-semibold">Product</label>
            <input
              type="text"
              value={editingOrder.product}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, product: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-3 font-semibold"
            />

            <label className="block mb-2 font-semibold">Quantity</label>
            <input
              type="number"
              value={editingOrder.quantity}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, quantity: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-3 font-semibold"
            />

            <label className="block mb-2 font-semibold">Amount</label>
            <input
              type="text"
              value={editingOrder.amount}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, amount: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-3 font-semibold"
            />

            <label className="block mb-2 font-semibold">Date</label>
            <input
              type="date"
              value={editingOrder.date}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, date: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-3 font-semibold"
            />

            <label className="block mb-2 font-semibold">Payment Method</label>
            <input
              type="text"
              value={editingOrder.payment}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, payment: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-3 font-semibold"
            />

            <label className="block mb-2 font-semibold">Address</label>
            <textarea
              value={editingOrder.address}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, address: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-4 font-semibold"
            />

            <label className="block mb-2 font-semibold">Status</label>
            <select
              value={editingOrder.status}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, status: e.target.value })
              }
              className="border w-full rounded-lg px-3 py-2 mb-4 font-semibold"
            >
              {statusOptions.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingOrder(null)}
                className="px-4 py-2 rounded-lg border font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
