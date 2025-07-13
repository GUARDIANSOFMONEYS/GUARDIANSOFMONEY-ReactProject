import { configureStore } from "@reduxjs/toolkit";
import statisticsReducer from "./statistics/statisticsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { currencyReducer } from "./currency/slice";

const currencyPersistConfig = {
  key: "Currency",
  storage,
};

const persistedCurrencyReducer = persistReducer(
  currencyPersistConfig,
  currencyReducer
);

const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
    currency: persistedCurrencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist aksiyonları için uyarı vermemesi için:
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
