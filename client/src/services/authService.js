import API from "./api";


export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  const token = res.data.token;
  localStorage.setItem("token", token);
  return res.data;
};


export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};


export const logoutUser = () => {
  localStorage.removeItem("token");
};