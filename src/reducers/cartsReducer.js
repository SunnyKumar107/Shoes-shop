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
    removeToCart(state, action) {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { setCart, appendCart, removeToCart } = cartsSlice.actions;

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

export const removeItem = (id) => {
  return async (dispatch) => {
    await cartsService.remove(id);
    dispatch(removeToCart(id));
  };
};

export default cartsSlice.reducer;
