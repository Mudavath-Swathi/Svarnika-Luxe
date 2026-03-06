import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "necklaces",
    stock: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setForm({
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
          category: res.data.category,
          stock: res.data.stock,
          image: res.data.image,
        });
      } catch {
        alert("Product not found");
        navigate("/admin/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await API.put(`/products/${id}`, {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      navigate("/admin/products");
    } catch {
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex justify-center py-16 animate-fadeIn">
      <div className="w-full max-w-2xl bg-[var(--bg-surface)]
                      border border-[var(--border-subtle)]
                      rounded-2xl p-8">

        <h1 className="text-2xl mb-6 text-center font-serif">
          Edit Product
        </h1>

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

export default EditProduct;