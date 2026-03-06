import axios from "axios";

const ML_API = axios.create({
  baseURL: "http://localhost:3000/api/ml",
});

export const predictDiamondPrice = async (data) => {
  const res = await ML_API.post("/diamond-price", data);
  return res.data;
};