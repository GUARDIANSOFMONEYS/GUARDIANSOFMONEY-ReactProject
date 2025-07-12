import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
