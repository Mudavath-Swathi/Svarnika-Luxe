import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const categories = [
  { title: "Necklaces", image: assets.necklaces },
  { title: "Earrings", image: assets.earrings },
  { title: "Rings", image: assets.rings },
  { title: "Bracelets", image: assets.bracelets },
];

const Categories = () => {
  return (
    <section className="bg-[var(--bg-main)] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-[Playfair Display] text-center text-[var(--text-primary)]"
        >
          Explore Our Collections
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-center text-[var(--text-secondary)]"
        >
          Designed to endure. Crafted to inspire.
        </motion.p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-20">

          {categories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* MOBILE CONTAINER (ONLY MOBILE) */}
              <div
                className="
                  w-full
                  flex flex-col items-center
                  px-6 py-10
                  rounded-2xl
                  bg-[var(--bg-surface)]
                  md:bg-transparent
                "
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[220px] md:h-[260px]
                    w-auto
                    object-contain
                  "
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 md:mt-8 text-lg font-[Playfair Display] tracking-wide text-[var(--text-primary)]">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;