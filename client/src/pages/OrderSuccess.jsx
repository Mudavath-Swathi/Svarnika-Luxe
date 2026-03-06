import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  
  const navigate = useNavigate();

  
  return (
    <section className="relative z-20 min-h-[70vh] flex items-center justify-center animate-fadeIn">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[var(--bg-surface)] 
                   border border-[var(--border-subtle)] 
                   rounded-2xl px-12 py-16 text-center max-w-lg"
      >
        <CheckCircle size={56} className="mx-auto mb-6 text-white" />

        <h1 className="text-3xl mb-4">Order Confirmed</h1>

        <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">
          Thank you for your purchase. Your order has been placed successfully
          and is being prepared with utmost care.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/shop")}
            className="border border-white/40 px-6 py-3 rounded-full
                       hover:bg-white hover:text-black transition"
          >
            Continue Shopping
          </button>

          <button
            onClick= {() =>  navigate("/")}
            className="bg-white text-black px-6 py-3 rounded-full
                       hover:opacity-90 transition"
          >
            Go to Home
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default OrderSuccess;