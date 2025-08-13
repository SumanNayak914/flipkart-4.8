import React from "react";

export default function OrdersManager() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Orders Management</h1>

      {/* Orders Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Customer</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">#1001</td>
            <td className="p-2 border">Suman</td>
            <td className="p-2 border">₹1,200</td>
            <td className="p-2 border text-green-600">Delivered</td>
            <td className="p-2 border">
              <select className="border rounded p-1">
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">#1002</td>
            <td className="p-2 border">Rahul</td>
            <td className="p-2 border">₹900</td>
            <td className="p-2 border text-yellow-600">Pending</td>
            <td className="p-2 border">
              <select className="border rounded p-1">
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
