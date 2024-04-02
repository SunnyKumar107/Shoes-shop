import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/authentication";

const loginSlice = createSlice({
  name: "authentication",
  initialState: null,
  reducers: {
    userInit(state, action) {
      return action.payload;
    },
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
  },
});

export const { userInit, login, logout } = loginSlice.actions;

export const initializeUser = () => {
  return async (dispatch) => {
    try {
      const loggedUserJson = window.localStorage.getItem("loggedInShopAppUser");
      if (loggedUserJson) {
        const user = JSON.parse(loggedUserJson);
        dispatch(userInit(user));
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const loginUser = (authData) => {
  return async (dispatch) => {
    try {
      const user = await loginService.authentication(authData);
      dispatch(login(user));

      window.localStorage.setItem("loggedInShopAppUser", JSON.stringify(user));
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      window.localStorage.removeItem("loggedInShopAppUser");
      dispatch(logout());
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export default loginSlice.reducer;
