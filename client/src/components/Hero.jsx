import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { assets } from "../assets/assets";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.06 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[var(--bg-main)]">

      {/* HERO IMAGE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/10">
        <img
          ref={imageRef}
          src={assets.heroDiamond}
          alt="Luxury Diamond Jewelry"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex h-full max-w-7xl mx-auto px-6 items-center">
        <div className="max-w-xl">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-[Playfair Display] text-[var(--text-primary)] leading-tight"
          >
            Timeless Diamond
            <br />
            Elegance
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 text-lg text-[var(--text-secondary)]"
          >
            Crafted for those who value rarity, refinement, and enduring beauty.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 inline-block rounded-full border border-white/30 px-8 py-3 text-sm tracking-wide text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Collection
          </motion.button>

        </div>
      </div>

    </section>
  );
};

export default Hero;