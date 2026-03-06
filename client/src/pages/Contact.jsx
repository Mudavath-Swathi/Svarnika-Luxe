import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[var(--bg-main)] text-[var(--text-primary)] min-h-screen">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light tracking-wide"
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-[var(--text-secondary)] leading-relaxed"
        >
          Whether you have a question, need assistance, or wish to explore our
          collections further, our team is here to help you with personalized care.
        </motion.p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 
                     rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="text-sm text-[var(--text-secondary)]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 bg-transparent border border-white/20 
                         rounded-lg px-4 py-3 text-sm outline-none 
                         focus:border-white/40"
            />
          </div>

          <div>
            <label className="text-sm text-[var(--text-secondary)]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 bg-transparent border border-white/20 
                         rounded-lg px-4 py-3 text-sm outline-none 
                         focus:border-white/40"
            />
          </div>

          <div>
            <label className="text-sm text-[var(--text-secondary)]">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full mt-2 bg-transparent border border-white/20 
                         rounded-lg px-4 py-3 text-sm outline-none 
                         focus:border-white/40 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center 
                       px-6 py-3 border border-white/40 rounded-full 
                       text-sm tracking-wide hover:bg-white hover:text-black 
                       transition"
          >
            Send Message
          </button>
        </motion.form>

        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="flex items-start gap-4">
            <Mail className="text-white" size={22} />
            <div>
              <h4 className="text-sm font-medium">Email</h4>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                support@svarnikaluxe.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-white" size={22} />
            <div>
              <h4 className="text-sm font-medium">Phone</h4>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                +91 
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-white" size={22} />
            <div>
              <h4 className="text-sm font-medium">Studio</h4>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Hyderabad, India
              </p>
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-8">
            Our team carefully reviews every message and responds with the same
            attention to detail that defines our jewelry.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;