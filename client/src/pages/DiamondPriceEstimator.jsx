import { useState } from "react";
import { predictDiamondPrice } from "../services/mlApi";

const DiamondPriceEstimator = () => {
  const [form, setForm] = useState({
    carat: "",
    cut: "Ideal",
    color: "E",
    clarity: "SI1",
    depth: "",
    table: "",
    x: "",
    y: "",
    z: "",
  });

  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await predictDiamondPrice({
        ...form,
        carat: Number(form.carat),
        depth: Number(form.depth),
        table: Number(form.table),
        x: Number(form.x),
        y: Number(form.y),
        z: Number(form.z),
      });
      setPrice(result.predicted_price);
    } catch (err) {
      console.error(err);
      alert("Prediction failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-10 text-center">
        Diamond Price Estimator 💎
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            className="p-3 rounded bg-black border border-white/20"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 px-6 py-3 rounded bg-white text-black"
      >
        {loading ? "Predicting..." : "Estimate Price"}
      </button>

      {price && (
        <p className="mt-8 text-2xl">
          Estimated Price: ₹{price.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default DiamondPriceEstimator;