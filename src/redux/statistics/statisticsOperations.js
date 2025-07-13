// Meryem Aslan

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../shared/api";

export const fetchTransactionsSummary = createAsyncThunk(
  "statistics/fetchTransactionsSummary",
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/transactions-summary`, {
        params: { month, year },
      });
      console.log("API response:", response.data);
      return response.data;
    } catch (error) {
      console.error("API error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
