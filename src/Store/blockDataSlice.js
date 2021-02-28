import { createSlice } from "@reduxjs/toolkit";

export const blockDataSlice = createSlice({
  name: "blocks",
  initialState: [],
  reducers: {
    addNewBlockList: (state, action) => {
      const { blockList } = action.payload;
      let tempBlockList = { ...state };
      tempBlockList = blockList;
      return tempBlockList;
    },
    addNewBlock: (state, action) => {
      const { post } = action.payload;
      return [post, ...state];
    },
  },
  extraReducers: {},
});
