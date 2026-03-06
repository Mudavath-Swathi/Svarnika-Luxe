import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Plus } from "lucide-react";
import API from "../../services/api";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  
  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading products...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] px-6 py-10 animate-fadeIn">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-serif">Products</h1>

          <button
            onClick={() => navigate("/admin/add-product")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-[var(--highlight)] text-black text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--border-subtle)] rounded-lg overflow-hidden">

            <thead className="bg-[var(--bg-elevated)] text-sm">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-[var(--text-muted)]">
                    No products found
                  </td>
                </tr>
              )}

              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t border-[var(--border-subtle)]
                             hover:bg-[var(--bg-elevated)] transition"
                >
                  {/* IMAGE */}
                  <td className="p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>

                  {/* NAME */}
                  <td className="p-3">{product.name}</td>

                  {/* CATEGORY */}
                  <td className="p-3 capitalize">{product.category}</td>

                  {/* PRICE */}
                  <td className="p-3">₹{product.price}</td>

                  {/* STOCK */}
                  <td className="p-3">{product.stock}</td>

                  {/* ACTIONS */}
                  <td className="p-3 flex justify-center gap-4">
                    <button
                      onClick={() =>
                        navigate(`/admin/edit-product/${product._id}`)
                      }
                      className="hover:opacity-70"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-400 hover:opacity-70"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;