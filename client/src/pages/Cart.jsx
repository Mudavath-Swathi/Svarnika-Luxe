import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-6">
          Discover timeless pieces curated just for you.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="border px-6 py-3 hover:bg-white hover:text-black transition"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl mb-3">Your Selections</h1>
        <p className="text-gray-400">
          A curated selection of timeless pieces, ready to be yours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-6 bg-[#141414] p-6 rounded-xl"
            >
              {/* Image */}
              <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="border p-2 rounded-full hover:bg-white hover:text-black transition"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="text-sm">{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="border p-2 rounded-full hover:bg-white hover:text-black transition"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => deleteFromCart(item.id)}
                className="text-gray-400 hover:text-white transition"
              >
                <Trash2 size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-[#141414] p-8 rounded-xl h-fit">
          <h3 className="text-xl mb-6">Order Summary</h3>

          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-400">Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-400">Shipping</span>
            <span>Complimentary</span>
          </div>

          <div className="border-t border-gray-700 my-4" />

          <div className="flex justify-between text-lg font-medium mb-6">
            <span>Total</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-white text-black py-3 rounded-lg hover:opacity-90 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;