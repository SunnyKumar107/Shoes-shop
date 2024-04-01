import { createSlice } from "@reduxjs/toolkit";
import productsService from "../services/products";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const initializeProducts = () => {
  return async (dispatch) => {
    const allProduct = await productsService.getAll();
    dispatch(setProducts(allProduct));
  };
};

export default productsSlice.reducer;
