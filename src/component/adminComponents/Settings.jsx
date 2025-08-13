import React, { useState } from "react";

export default function Settings() {
  const [storeInfo, setStoreInfo] = useState({
    name: "My E-Commerce Store",
    email: "admin@example.com",
    phone: "+91 9876543210",
    address: "123, Main Street, India",
  });

  const [paymentMethods, setPaymentMethods] = useState({
    cod: true,
    upi: true,
    card: false,
  });

  const [shipping, setShipping] = useState({
    deliveryCharge: 50,
    freeShippingLimit: 1000,
  });

  const [themeColor, setThemeColor] = useState("#2563eb");

  const [security, setSecurity] = useState({
    password: "",
    notifications: true,
  });

  const handleStoreChange = (e) => {
    setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      {/* Store Information */}
      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Store Information</h2>
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            value={storeInfo.name}
            onChange={handleStoreChange}
            placeholder="Store Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={storeInfo.email}
            onChange={handleStoreChange}
            placeholder="Store Email"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            value={storeInfo.phone}
            onChange={handleStoreChange}
            placeholder="Store Phone"
            className="w-full border p-2 rounded"
          />
          <textarea
            name="address"
            value={storeInfo.address}
            onChange={handleStoreChange}
            placeholder="Store Address"
            className="w-full border p-2 rounded"
          />
        </div>
      </section>

      {/* Payment Methods */}
      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
        <div className="space-y-2">
          {Object.keys(paymentMethods).map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={paymentMethods[method]}
                onChange={() =>
                  setPaymentMethods((prev) => ({
                    ...prev,
                    [method]: !prev[method],
                  }))
                }
              />
              {method.toUpperCase()}
            </label>
          ))}
        </div>
      </section>

      {/* Shipping Settings */}
      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Shipping Settings</h2>
        <input
          type="number"
          name="deliveryCharge"
          value={shipping.deliveryCharge}
          onChange={handleShippingChange}
          placeholder="Delivery Charge"
          className="w-full border p-2 rounded mb-2"
        />
        <input
          type="number"
          name="freeShippingLimit"
          value={shipping.freeShippingLimit}
          onChange={handleShippingChange}
          placeholder="Free Shipping Limit"
          className="w-full border p-2 rounded"
        />
      </section>

      {/* Theme Color */}
      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Theme Color</h2>
        <input
          type="color"
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
        />
      </section>

      {/* Security & Notifications */}
      <section className="p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Security & Notifications</h2>
        <input
          type="password"
          placeholder="New Password"
          value={security.password}
          onChange={(e) =>
            setSecurity({ ...security, password: e.target.value })
          }
          className="w-full border p-2 rounded mb-2"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={security.notifications}
            onChange={() =>
              setSecurity((prev) => ({
                ...prev,
                notifications: !prev.notifications,
              }))
            }
          />
          Email Notifications
        </label>
      </section>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Settings
      </button>
    </div>
  );
}
