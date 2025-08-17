import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Admin from "./pages/Admin.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserRegister from "./pages/UserRegister.jsx";
import { ToastContainer } from "react-toastify";
import FlipkartProductPage from "./component/product/FlipkartProductPage.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

const App = () => {
  const loc = useLocation();
    return (
      <>
        {loc.pathname == "/" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route 
  path="/admin" 
  element={
    <ProtectedRoute allowedRole="admin">
      <Admin />
    </ProtectedRoute>
  } 
/>
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer  position="top-center"  
        autoClose={1000}        
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
        {["/", "/account", "/categories", "/cart"].includes(loc.pathname) && <Footer />}

        
      </>
    );
};

export default App;
