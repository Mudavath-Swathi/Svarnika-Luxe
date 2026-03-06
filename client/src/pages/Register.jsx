import { useState } from "react";
import { registerUser } from "../services/authService";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await registerUser({ name, email, password });
      navigate("/"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] animate-fadeIn">
      <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8 shadow-xl">

        {/* Brand */}
        <div className="flex justify-center mb-4">
          <img
            src={assets.logo}
            alt="Svarnika Luxe"
            className="h-16 object-contain"
          />
        </div>

        <p className="elegant-text text-center mb-8">
          Create your account
        </p>

        {/* Error */}
        {error && (
          <p className="text-center text-sm mb-4 text-red-400">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-soft)]
                         text-[var(--text-primary)] placeholder-[var(--text-muted)]
                         focus:outline-none focus:border-[var(--highlight)] transition"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-soft)]
                         text-[var(--text-primary)] placeholder-[var(--text-muted)]
                         focus:outline-none focus:border-[var(--highlight)] transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-soft)]
                         text-[var(--text-primary)] placeholder-[var(--text-muted)]
                         focus:outline-none focus:border-[var(--highlight)] transition"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[var(--highlight)] text-black font-medium
                       hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-4 text-[var(--text-muted)]">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-[var(--highlight)] hover:underline"
          >
            Sign in
          </span>
        </p>

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-[var(--text-muted)]">
          © {new Date().getFullYear()} Svarnika Luxe
        </p>
      </div>
    </div>
  );
};

export default Register;