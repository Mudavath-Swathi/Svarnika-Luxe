import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminRoutes from "./admin/routes/AdminRoutes";
import DiamondPriceEstimator from "./pages/DiamondPriceEstimator";
import DiamondAI from "./pages/DiamondAI";

const App = () => {
  const location = useLocation();

  
  const hideLayoutRoutes = ["/admin", "/login", "/register"];

  const shouldHideLayout = hideLayoutRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      
      {/* Navbar */}
      {!shouldHideLayout && <Navbar />}

      {/* Page content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order-success" element={<OrderSuccess/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/diamond-price" element={<DiamondPriceEstimator />} />
          <Route path="/diamond-ai" element={<DiamondAI />} />
          
        </Routes>
      </main>

      {/* Footer */}
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;