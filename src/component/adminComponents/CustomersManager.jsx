import React from "react";

export default function CustomersManager() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">👤 Customers Management</h1>

      {/* Customers Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Customer ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Orders</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">C001</td>
            <td className="p-2 border">Suman</td>
            <td className="p-2 border">suman@example.com</td>
            <td className="p-2 border">5</td>
            <td className="p-2 border">
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                View
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">C002</td>
            <td className="p-2 border">Rahul</td>
            <td className="p-2 border">rahul@example.com</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                View
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
