import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from './userDataSlice';
import { blockDataSlice } from './blockDataSlice';


const rootReducer = combineReducers({
    users: userDataSlice.reducer,
    blockss: blockDataSlice.reducer,
})
export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})