import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrency } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
export default currencySlice.actions;