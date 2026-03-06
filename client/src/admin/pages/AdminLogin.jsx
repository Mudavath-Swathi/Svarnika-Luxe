import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await loginUser(formData);

    if (!res.isAdmin) {
      setError("Access denied. Admins only.");
      return;
    }

    localStorage.setItem("token", res.token);
    navigate("/admin");

  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10"
      >
        <h1 className="text-3xl font-light mb-8 text-center">
          Admin Login
        </h1>

        {error && (
          <p className="mb-4 text-red-400 text-sm text-center">
            {error}
          </p>
        )}

        <div className="mb-5">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          {loading ? "Signing in..." : "Login as Admin"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;