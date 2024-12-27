import { createSlice } from "@reduxjs/toolkit";

// Create a slice for handling cart products
const favoriteSlice = createSlice({
  name: "favorites", // Name of the slice
  initialState: [], // Initial state is an empty array for favorite products
  reducers: {
    // Reducer to add a product to favorites if it's not already added
    addToFavorites: (state, action) => {
      if (!state.some((product) => product._id === action.payload._id)) {
        state.push(action.payload); // Add the product to favorites
      }
    },

    // Reducer to remove a product from favorites
    removeFromFavorites: (state, action) => {
      return state.filter((product) => product._id !== action.payload._id); // Filter out the removed product
    },

    // Reducer to set the list of favorites
    setFavorites: (state, action) => {
      return action.payload; // Set the favorites list to the payload
    },
  },
});

// Exporting the actions to be used in components
export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoriteSlice.actions;

// Selector to access favorite products from the state
export const selectFavoriteProduct = (state) => state.favourites;

// Exporting the reducer to be included in the store
export default favoriteSlice.reducer;
