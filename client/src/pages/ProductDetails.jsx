import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import API from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const productRes = await API.get(`/products/${id}`);
        const currentProduct = productRes.data;
        setProduct(currentProduct);

        
        const allRes = await API.get("/products");
        const relatedProducts = allRes.data.filter(
          (p) =>
            p.category === currentProduct.category &&
            p._id !== currentProduct._id
        );

        setRelated(relatedProducts);
      } catch (error) {
        console.error("Product fetch error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  
  if (loading) {
    return (
      <div className="text-center text-gray-400 py-32">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-400 py-32">
        Product not found.
      </div>
    );
  }

  return (
    <section className="bg-[var(--bg-main)] text-[var(--text-primary)] py-28 px-6">

      {/* PRODUCT MAIN */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 
                     rounded-2xl p-8 flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-w-md w-full object-contain 
                       hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-light mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold mb-8">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* DETAILS (STATIC – UI UNCHANGED) */}
          <ul className="space-y-2 text-sm text-[var(--text-secondary)] mb-10">
            <li>• Premium craftsmanship</li>
            <li>• Ethically sourced gemstones</li>
            <li>• Limited luxury collection</li>
          </ul>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              className="flex items-center gap-2 border border-white/40 
                         rounded-full px-6 py-3 text-sm tracking-wide 
                         hover:bg-white hover:text-black transition"
            >
              <ShoppingBag size={18} /> Add to Cart
            </button>

            <button
              className="flex items-center gap-2 bg-white text-black 
                         rounded-full px-6 py-3 text-sm tracking-wide 
                         hover:bg-neutral-200 transition"
            >
              Buy Now <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto mt-32">
          <h2 className="text-3xl font-light mb-12 text-center">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {related.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/product/${item._id}`)}
                className="cursor-pointer bg-white/5 backdrop-blur-md 
                           border border-white/10 rounded-2xl p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-contain mb-4"
                />
                <h3 className="text-sm mb-1">{item.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
};

export default ProductDetails;