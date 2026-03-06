import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[var(--bg-main)] text-[var(--text-primary)]">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light tracking-wide"
        >
          Crafted for Timeless Elegance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-[var(--text-secondary)] leading-relaxed"
        >
          At Svarnika Luxe, fine jewelry is more than adornment — it is an
          expression of heritage, artistry, and enduring beauty designed to
          be cherished across generations.
        </motion.p>
      </div>

      {/* BRAND STORY */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Our Story
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Founded with a vision to celebrate refined craftsmanship,
            Svarnika Luxe brings together traditional techniques and
            contemporary design to create jewelry that feels both timeless
            and modern.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            Each creation begins with ethically sourced gemstones and
            meticulous attention to detail — shaped by skilled artisans
            who understand that true luxury lies in precision, patience,
            and purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Our Philosophy
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            We believe fine jewelry should transcend trends. Our designs
            are intentionally restrained, allowing the brilliance of each
            gemstone to speak for itself.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            From everyday elegance to statement heirlooms, every piece is
            crafted to accompany life’s most meaningful moments — quietly,
            confidently, and beautifully.
          </p>
        </motion.div>
      </div>

      {/* VALUES */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light text-center mb-16"
        >
          What Defines Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Exceptional Craftsmanship",
              desc: "Every piece is handcrafted with precision, ensuring uncompromising quality and enduring beauty."
            },
            {
              title: "Ethical Sourcing",
              desc: "We work with responsibly sourced diamonds and gemstones that meet the highest ethical standards."
            },
            {
              title: "Timeless Design",
              desc: "Our creations are designed to remain relevant, elegant, and cherished for years to come."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 
                         rounded-2xl p-8"
            >
              <h3 className="text-lg font-medium mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CLOSING STATEMENT */}
      <div className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg text-[var(--text-secondary)] leading-relaxed"
        >
          Svarnika Luxe is dedicated to creating jewelry that tells a story —
          of elegance, intention, and timeless beauty — designed to be worn,
          loved, and passed on.
        </motion.p>
      </div>

    </section>
  );
};

export default About;