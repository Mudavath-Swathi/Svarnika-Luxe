import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div
        className="relative aspect-square rounded-2xl bg-black overflow-hidden"
        onClick={() => navigate(`/product/${product._id}`)} 
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full
                     opacity-0 group-hover:opacity-100 transition hover:scale-110"
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      {/* Content */}
      <div
        className="mt-4 space-y-1"
        onClick={() => navigate(`/product/${product._id}`)} // ✅ FIX
      >
        <h3 className="text-white text-sm font-medium tracking-wide">
          {product.name}
        </h3>

        <p className="text-xs text-gray-400 line-clamp-1">
          Crafted with timeless elegance
        </p>

        <p className="text-sm text-white font-semibold">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;