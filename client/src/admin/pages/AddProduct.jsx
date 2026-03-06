import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "necklaces",
    stock: "",
    image: null,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.image) {
      setError("Please upload product image");
      return;
    }

    try {
      setSaving(true);

      
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", Number(form.price));
      formData.append("category", form.category);
      formData.append("stock", Number(form.stock));
      formData.append("image", form.image);

      
      await API.post("/products", formData);

      navigate("/admin/products");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create product");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex justify-center py-16 animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-[var(--bg-surface)]
                   border border-[var(--border-subtle)]
                   rounded-2xl p-8"
      >
        <h1 className="text-2xl mb-6 text-center">Add Product</h1>

        {error && (
          <p className="text-center text-sm mb-4 text-red-400">
            {error}
          </p>
        )}

        <ProductForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          loading={saving}
        />
      </div>
    </div>
  );
};

export default AddProduct;