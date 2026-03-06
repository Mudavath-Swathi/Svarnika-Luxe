import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-main)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-14"
        >

          {/* Brand */}
          <div>
            <img
              src={assets.logo}
              alt="Svarnika Luxe"
              className="h-14 w-auto"
            />

            <p className="mt-6 text-sm text-[var(--text-secondary)] leading-relaxed">
              Fine jewelry crafted with uncompromising precision, timeless design,
              and a deep respect for heritage. Each creation reflects a balance of
              modern elegance and enduring craftsmanship — designed to be treasured
              across generations.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a className="p-2 border border-[var(--border-soft)] rounded-full hover:bg-[var(--bg-elevated)] transition cursor-pointer">
                <Instagram size={16} />
              </a>
              <a className="p-2 border border-[var(--border-soft)] rounded-full hover:bg-[var(--bg-elevated)] transition cursor-pointer">
                <Twitter size={16} />
              </a>
              <a className="p-2 border border-[var(--border-soft)] rounded-full hover:bg-[var(--bg-elevated)] transition cursor-pointer">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-widest text-[var(--text-primary)]">
              NAVIGATION
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
              <li><Link to="/collections" className="hover:text-white transition">Collections</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm tracking-widest text-[var(--text-primary)]">
              COLLECTIONS
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>Necklaces</li>
              <li>Earrings</li>
              <li>Rings</li>
              <li>Bracelets</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest text-[var(--text-primary)]">
              CONTACT
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>support@svarnikaluxe.com</li>
              <li>Hyderabad, India</li>
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)]"
        >
          <p>© {new Date().getFullYear()} Svarnika Luxe. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition cursor-pointer">Terms</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;