import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  lightMode: false,
  chartType: "area2d",
  cryptoChartType: "line",
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
    setChartType: (state, { payload }) => {
      state.chartType = payload;
    },
    setCryptoChartType: (state, { payload }) => {
      console.log(payload);
      state.cryptoChartType = payload;
    },
  },
});

export const {
  toggleDarkMode,
  toggleLightMode,
  setCryptoChartType,
  setChartType,
} = balanceSlice.actions;

export default balanceSlice.reducer;
