import { createSlice } from "@reduxjs/toolkit";

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
    removeAllCart(state, action) {
      return [];
    },
  },
});

export const { setCart, appendCart, removeToCart, removeAllCart } =
  cartsSlice.actions;

export const initializeCarts = () => {
  return async (dispatch) => {
    dispatch(setCart());
  };
};

export const updateCart = (newItem) => {
  return async (dispatch) => {
    dispatch(appendCart(newItem));
  };
};

export const removeItem = (id) => {
  return async (dispatch) => {
    dispatch(removeToCart(id));
  };
};

export const orderPlaced = () => {
  return async (dispatch) => {
    dispatch(removeAllCart());
  };
};

export default cartsSlice.reducer;
