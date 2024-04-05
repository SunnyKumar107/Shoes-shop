import { createSlice } from "@reduxjs/toolkit";
import cartsService from "../services/carts";

const cartsSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    setCart(state, action) {
      return action.payload;
    },
    appendCart(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { setCart, appendCart } = cartsSlice.actions;

export const initializeCarts = () => {
  return async (dispatch) => {
    const cartProduct = await cartsService.getAll();
    dispatch(setCart(cartProduct));
  };
};

export const updateCart = (newItem) => {
  return async (dispatch) => {
    const newCartProduct = await cartsService.addToCart(newItem);
    dispatch(appendCart(newCartProduct));
  };
};

export default cartsSlice.reducer;
