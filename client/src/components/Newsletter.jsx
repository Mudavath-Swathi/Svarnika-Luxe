import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Newsletter = () => {
  const sectionRef = useRef(null);

  
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--bg-main)] py-32"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-[var(--text-primary)]"
        >
          Join Our Inner Circle
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed"
        >
          Be the first to discover new collections, private viewings, and
          stories of craftsmanship — curated exclusively for you.
        </motion.p>

        {/* Input + Button */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="
              w-full sm:w-96
              bg-transparent
              border border-[var(--border-soft)]
              px-5 py-4
              text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)]
              focus:outline-none
              focus:border-white
              transition
            "
          />

          <button
            type="submit"
            className="
              px-10 py-4
              border border-[var(--border-soft)]
              text-[var(--text-primary)]
              tracking-wide
              hover:bg-[var(--bg-elevated)]
              transition
            "
          >
            Subscribe
          </button>
        </motion.form>

        {/* Privacy note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-xs text-[var(--text-muted)]"
        >
          We respect your privacy. No spam — only thoughtful updates.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;