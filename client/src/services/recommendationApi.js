import axios from "./api"; 

export const getRecommendations = async (productId) => {
  const res = await axios.get(`/api/recommend/${productId}`);
  return res.data.recommended_ids;
};