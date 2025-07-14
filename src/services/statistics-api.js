import { userTransactionsApi } from "../config/userTransactionApi";

export const getTransactionSummary = async (params) => {
  const { data } = await userTransactionsApi.get("/api/transactions-summary", {
    params,
  });
  return data;
};

export const getCategories = async () => {
  const { data } = await userTransactionsApi.get("/api/transaction-categories");
  return data;
};

export const getTransactionsCategories = async () => {
  const { data } = await userTransactionsApi.get("/api/transaction-categories");
  return data;
};
