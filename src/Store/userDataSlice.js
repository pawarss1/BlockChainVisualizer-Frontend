import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    addUserData: (state, action) => {
      const newState = {
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
      }
      return newState
    },
    updateUserData: (state, action) => {
      const newState = action.payload;
      return newState;
    },
  },
  extraReducers: {},
});
