import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "./authSlice.js";
import favouriteReducer from "./favouriteSlice.js";
import { getFavoritesFromLocalStorage } from "./localStorage.js";

const initialFavourite = getFavoritesFromLocalStorage() || [];
const store = configureStore({
  reducer: {
    auth: authReducer,
    favourites: favouriteReducer,
  },

  preloadedState: {
    favourites: initialFavourite,
  },
});

setupListeners(store.dispatch);
export default store;
