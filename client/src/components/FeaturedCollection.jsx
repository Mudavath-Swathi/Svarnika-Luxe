import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { assets } from "../assets/assets";

const FeaturedCollection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--bg-main)] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-[Playfair Display] text-center text-[var(--text-primary)]"
        >
          Featured Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 md:mt-6 text-center text-[var(--text-secondary)] max-w-xl mx-auto"
        >
          A signature masterpiece that defines rarity, refinement, and enduring elegance.
        </motion.p>

        {/* Content */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT – MAIN IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <img
              src={assets.featuredMain}
              alt="Featured Jewelry"
              className="
                w-full
                max-h-[420px] md:max-h-none
                object-cover
                rounded-2xl
              "
            />
          </motion.div>

          {/* RIGHT – TEXT + ALT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-[Playfair Display] text-[var(--text-primary)]">
              The Emerald Signature
            </h3>

            <p className="mt-5 md:mt-6 text-[var(--text-secondary)] leading-relaxed">
              Meticulously crafted around a rare emerald centerpiece, this creation
              celebrates precision, heritage, and timeless luxury.
            </p>

            {/* ALT IMAGES */}
            <div className="mt-10 md:mt-14 grid grid-cols-2 gap-6">
              <motion.img
                src={assets.featuredAlt}
                alt="Featured alternate view"
                className="rounded-xl object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              <motion.img
                src={assets.featuredDetail}
                alt="Featured detail view"
                className="rounded-xl object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;