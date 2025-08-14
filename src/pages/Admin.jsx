import React, { useState } from "react";
import Sidebar from "../component/adminComponents/Slider";
import Dashboard from "../component/adminComponents/Dashboard";
import ProductsManager from "../component/adminComponents/ProductsManager";
import OrdersManager from "../component/adminComponents/OrdersManager";
import CustomersManager from "../component/adminComponents/CustomersManager";
import Reports from "../component/adminComponents/Reports";
import Settings from "../component/adminComponents/Settings";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-6">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "products" && <ProductsManager />}
        {activePage === "orders" && <OrdersManager />}
        {activePage === "customers" && <CustomersManager />}
        {activePage === "reports" && <Reports />}
        {activePage === "settings" && <Settings />}
      </main>
    </div>
  );
}
