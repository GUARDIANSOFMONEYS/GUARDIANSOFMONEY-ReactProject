import { configureStore } from "@reduxjs/toolkit";
import statisticsReducer from "./statistics/statisticsSlice";

const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
  },
});

export default store;
