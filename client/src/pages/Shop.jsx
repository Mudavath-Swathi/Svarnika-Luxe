import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-28 px-6">
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          Fine Jewelry Collection
        </h1>

        <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
          Discover a curated selection of fine jewelry crafted with exceptional
          precision, rare gemstones, and timeless design. Each piece is designed
          to transcend trends and become part of your enduring story.
        </p>
      </section>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg opacity-60">
          Loading collection...
        </p>
      )}

      {/* Products Grid */}
      {!loading && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

    </section>
  );
};

export default Shop;