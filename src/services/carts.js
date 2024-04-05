import axios from "axios";

const baseUrl = "/api/carts";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addToCart = async (product) => {
  const response = await axios.post(baseUrl, product);
  return response.data;
};

export default {
  getAll,
  addToCart,
};
