import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../reducers/productReducer";
import loginReducer from "../reducers/loginReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: loginReducer,
  },
});

export default store;
