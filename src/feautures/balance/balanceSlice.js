import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  lightMode: false,
  dataType: "area2d",
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleLightMode: (state) => {
      state.lightMode = !state.lightMode;
    },
    setDataType: (state, { payload }) => {
      state.dataType = payload;
    },
  },
});

export const { toggleDarkMode, toggleLightMode, setDataType } =
  balanceSlice.actions;

export default balanceSlice.reducer;
