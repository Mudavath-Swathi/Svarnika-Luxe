import ImageUpload from "./ImageUpload";

const categories = ["necklaces", "earrings", "rings", "bracelets"];

const ProductForm = ({ form, setForm, onSubmit, loading }) => {
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit} className="space-y-5">

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product title"
        required
        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)]
                   border border-[var(--border-soft)]"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        rows="4"
        placeholder="Product description"
        required
        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)]
                   border border-[var(--border-soft)]"
      />

      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        required
        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)]
                   border border-[var(--border-soft)]"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)]
                   border border-[var(--border-soft)]"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
        className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)]
                   border border-[var(--border-soft)]"
      />

      {/*  IMAGE UPLOAD  */}
      <input
  type="file"
  accept="image/*"
  required
  onChange={(e) =>
    setForm({ ...form, image: e.target.files[0] })
  }
  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)]
             border border-[var(--border-soft)]"
/>

      <button
        disabled={loading}
        className="w-full py-3 rounded-lg bg-[var(--highlight)]
                   text-black font-medium"
      >
        {loading ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
};

export default ProductForm;