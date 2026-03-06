import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!name || !email || !address) {
      alert("Please fill all details");
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center animate-fadeIn">
        <h2 className="text-3xl mb-4">Your Checkout is Empty</h2>
        <p className="text-[var(--text-secondary)] mb-6">
          Add items to your cart before proceeding to checkout.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="border border-white/40 px-6 py-3 rounded-full
                     hover:bg-white hover:text-black transition"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-28 animate-fadeIn">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl mb-4">Checkout</h1>
        <p className="text-[var(--text-secondary)]">
          Review your order before completing the purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT — ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-6 bg-[var(--bg-surface)] 
                         border border-[var(--border-subtle)] 
                         rounded-2xl p-6"
            >
              <div className="w-28 h-28 bg-black rounded-xl flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="text-right font-medium">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </div>
            </motion.div>
          ))}
        </div>

        
        <div className="bg-[var(--bg-surface)] 
                        border border-[var(--border-subtle)] 
                        rounded-2xl p-8 h-fit space-y-5">
          <h3 className="text-xl mb-2">Order Summary</h3>

          <div className="flex justify-between text-sm">
            <span className="text-[var(--text-secondary)]">Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-[var(--text-secondary)]">Shipping</span>
            <span>Complimentary</span>
          </div>

          <div className="border-t border-[var(--border-soft)] my-4" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-full bg-white text-black outline-none"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-full bg-white text-black outline-none"
          />

          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Delivery Address"
            className="w-full px-4 py-3 rounded-full bg-white text-black outline-none"
          />

          <button
            onClick={() => { navigate("/order-success")}}
            className="w-full bg-white text-black py-3 rounded-full
                       hover:opacity-90 transition"
          >
            Place Order
          </button>

          <p className="text-xs text-[var(--text-muted)] text-center">
            Secure checkout · No payment required (demo)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;