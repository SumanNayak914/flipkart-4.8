import React from "react";

const menuItems = [
  { label: "Dashboard", key: "dashboard" },
  { label: "Products", key: "products" },
  { label: "Orders", key: "orders" },
  { label: "Customers", key: "customers" },
  { label: "Reports", key: "reports" },
  { label: "Settings", key: "settings" },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`p-3 mb-2 rounded cursor-pointer hover:bg-gray-700 ${
              activePage === item.key ? "bg-gray-700" : ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
