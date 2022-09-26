import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./feautures/balance/balanceSlice";
export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
