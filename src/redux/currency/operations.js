import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.monobank.ua";


export const fetchCurrency = createAsyncThunk(
  "currency/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/bank/currency`);
      const usd = response.data.find(
        (item) => item.currencyCodeA === 840 && item.currencyCodeB === 980
      );
      const eur = response.data.find(
        (item) => item.currencyCodeA === 978 && item.currencyCodeB === 980
      );
      const allData = {
        date: Date.now(),
        usd: { buy: usd.rateBuy.toFixed(2), sell: usd.rateSell.toFixed(2) },
        eur: { buy: eur.rateBuy.toFixed(2), sell: eur.rateSell.toFixed(2) },
      };
      return allData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);