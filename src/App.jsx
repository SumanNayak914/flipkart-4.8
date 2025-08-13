import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Admin from "./pages/Admin.jsx";
import UserLogin from "./pages/UserLogin.jsx";

const App = () => {
  const loc = useLocation();

  return (
    <>
      {loc.pathname == "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
