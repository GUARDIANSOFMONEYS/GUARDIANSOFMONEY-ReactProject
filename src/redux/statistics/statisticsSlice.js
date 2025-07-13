import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactionsSummary } from "./statisticsOperations";

// MERYEM ASLAN

const initialState = {
  summary: null,
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionsSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(fetchTransactionsSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Bir hata oluştu";
      });
  },
});

export default statisticsSlice.reducer;
