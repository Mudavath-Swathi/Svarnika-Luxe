import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { assets } from "../assets/assets";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { cartItems } = useCart();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Diamond AI", path: "/diamond-price", highlight: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full border-b border-[var(--border-subtle)]">
        <nav className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/">
            <img
              src={assets.logo}
              alt="Svarnika Luxe"
              className="h-12 brightness-150 contrast-150"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                       `text-[15px] ${
                      link.highlight
                       ? "text-white font-semibold"
                      : "text-[var(--text-secondary)]"
                      } hover:text-[var(--text-primary)]`}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <Search className="w-5 h-5 cursor-pointer" onClick={() => navigate("/search")}/>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-white text-black
                             text-xs px-1.5 rounded-full"
                >
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* User (AUTH CONNECTED) */}
            <User
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                if (isLoggedIn) {
                  handleLogout(); 
                } else {
                  navigate("/login");
                }
              }}
            />

            {/* Mobile menu */}
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--bg-main)] text-[var(--text-primary)] animate-fadeIn">

          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-7 h-7 text-[var(--text-primary)]" />
          </button>

          {/* Menu links */}
          <div className="flex h-full flex-col items-center justify-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-2xl font-serif tracking-wide text-[var(--text-primary)] hover:opacity-80"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;