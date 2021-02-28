import { createSlice } from "@reduxjs/toolkit";

export const blockDataSlice = createSlice({
  name: "blocks",
  initialState: [],
  reducers: {
    addNewBlockList: (state, action) => {
      const { postList } = action.payload;
      let tempPostList = { ...state };
      tempPostList = postList;
      return tempPostList;
    },
    addNewBlock: (state, action) => {
      const { post } = action.payload;
      return [post, ...state];
    },
  },
  extraReducers: {},
});
