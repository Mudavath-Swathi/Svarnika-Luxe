import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "Exquisite craftsmanship that feels timeless. Every detail reflects true luxury.",
    name: "Ananya R.",
    location: "Mumbai",
  },
  {
    quote:
      "Svarnika Luxe pieces feel personal, refined, and effortlessly elegant.",
    name: "Meera S.",
    location: "Bangalore",
  },
  {
    quote:
      "A rare balance of modern design and classic sophistication.",
    name: "Ritika K.",
    location: "Delhi",
  },
];

const Testimonials = () => {
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
      className="bg-[var(--bg-main)] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center text-[var(--text-primary)]"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-center text-[var(--text-secondary)]"
        >
          Stories of trust, refinement, and enduring elegance.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="
                bg-[var(--bg-surface)]
                border border-white/10
                rounded-2xl
                p-8
                backdrop-blur-sm
              "
            >
              <p className="italic text-[var(--text-secondary)] leading-relaxed">
                “{item.quote}”
              </p>

              <div className="mt-6">
                <p className="text-[var(--text-primary)] font-medium">
                  {item.name}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;