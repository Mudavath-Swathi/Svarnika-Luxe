import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const collections = [
  {
    title: "Necklaces",
    image: assets.necklaces,
    price: "₹48,000+",
    tagline: "Bold statements of timeless elegance",
  },
  {
    title: "Earrings",
    image: assets.earrings,
    price: "₹32,000+",
    tagline: "Gracefully crafted to elevate every look",
  },
  {
    title: "Rings",
    image: assets.rings,
    price: "₹65,000+",
    tagline: "Icons of brilliance and individuality",
  },
  {
    title: "Bracelets",
    image: assets.bracelets,
    price: "₹42,000+",
    tagline: "Designed to shimmer with every movement",
  },
];

const CollectionsPreview = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--bg-main)] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl text-center"
        >
          Our Collections
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-[var(--text-secondary)]"
        >
          A curated expression of timeless design and exceptional craftsmanship.
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
                group relative rounded-2xl
                bg-[var(--bg-surface)]
                hover:bg-[var(--bg-elevated)]
                transition-all overflow-hidden
              "
            >
              {/* Image */}
              <div className="aspect-square flex items-center justify-center p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-[Playfair Display]">
                    {item.title}
                  </h3>

                  {/* Cart icon */}
                  <button
                    className="
                      p-2 rounded-full border border-[var(--border-soft)]
                      hover:bg-white hover:text-black
                      transition
                    "
                    title="Add to cart"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.tagline}
                </p>

                {/* Price */}
                <p className="text-sm tracking-wide text-[var(--text-muted)]">
                  {item.price}
                </p>
              </div>

              {/* Click entire card → Shop */}
              <button
                onClick={() => navigate("/shop")}
                className="absolute inset-0"
                aria-label={`Explore ${item.title}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => navigate("/shop")}
            className="
              flex items-center gap-3
              border border-[var(--border-soft)]
              px-10 py-4 rounded-full
              tracking-wide
              hover:bg-white hover:text-black
              transition
            "
          >
            View All in Shop
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CollectionsPreview;