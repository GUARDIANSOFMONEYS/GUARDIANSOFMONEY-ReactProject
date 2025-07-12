import React from "react";
import axios from "axios";

// Ortak kullanım bileşeni

export const api = axios.create({
  baseURL: `https://wallet.b.goit.study/api`,
});
