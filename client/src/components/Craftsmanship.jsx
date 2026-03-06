import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { assets } from "../assets/assets";

const Craftsmanship = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.08, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-[var(--bg-main)] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGE */}
        <div ref={imageRef} className="relative">
          <img
            src={assets.craftsmanshipMain}
            alt="Jewelry craftsmanship"
            className="w-full h-[560px] md:h-[520px] object-cover rounded-2xl"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h2 className="text-3xl md:text-4xl font-[Playfair Display] text-[var(--text-primary)]">
            Craftsmanship & Heritage
          </h2>

          <p className="mt-6 elegant-text leading-relaxed text-lg">
            Every creation is shaped by hand, guided by tradition, and perfected
            through uncompromising attention to detail.
          </p>

          <p className="mt-6 elegant-text leading-relaxed">
            From the careful selection of rare gemstones to the precision of
            stone-setting and polishing, our artisans transform raw brilliance
            into timeless expressions of luxury.
          </p>

          <p className="mt-6 elegant-text leading-relaxed">
            This is not mass production — it is patience, mastery, and respect
            for materials passed down through generations.
          </p>

          {/* Divider */}
          <div className="mt-10 w-20 h-[1px] bg-[var(--border-soft)]" />
        </motion.div>

      </div>
    </section>
  );
};

export default Craftsmanship;