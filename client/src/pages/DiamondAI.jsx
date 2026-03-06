import { useEffect, useState } from "react";
import { getRecommendations } from "../services/recommendationApi";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const DiamondAI = () => {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const PRODUCT_ID = 9;

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const ids = await getRecommendations(PRODUCT_ID);

        const matchedProducts = products.filter((p) =>
          ids.includes(Number(p.id))
        );

        setRecommended(matchedProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading AI recommendations…</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-serif text-center mb-12">
        Diamond AI Recommendations 💎
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {recommended.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DiamondAI;