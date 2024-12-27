import { createSlice } from "@reduxjs/toolkit";

// Function to retrieve user info from localStorage and check expiration time
const getUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const expirationTime = localStorage.getItem("expirationTime")
    ? parseInt(localStorage.getItem("expirationTime"))
    : null;

  // If expiration time exists and has passed, clear localStorage
  if (expirationTime && new Date().getTime() > expirationTime) {
    localStorage.clear();
    return null;
  }

  return userInfo;
};

// Initial state for authSlice
const initialState = {
  userInfo: getUserInfo(), // Retrieve initial user info from localStorage
};

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to store user credentials and set expiration time
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Save user info in localStorage
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // Set expiration to 30 days
      localStorage.setItem("expirationTime", expirationTime); // Save expiration time in localStorage
    },

    // Reducer to log out user by clearing localStorage and user info
    logout: (state) => {
      state.userInfo = null;
      localStorage.clear(); // Clear user info from localStorage
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer; // Export reducer to be used in store
