import { createSlice } from "@reduxjs/toolkit";

const getUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const expirationTime = localStorage.getItem("expirationTime")
    ? parseInt(localStorage.getItem("expirationTime"))
    : null;

  if (expirationTime && new Date().getTime() > expirationTime) {
    // Expiration time has passed, clear user info
    localStorage.clear();
    return null;
  }

  return userInfo;
};

const initialState = {
  userInfo: getUserInfo(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime);
    },

    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
