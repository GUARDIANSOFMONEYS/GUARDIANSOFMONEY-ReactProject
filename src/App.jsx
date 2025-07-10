import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Currency from "./components/Currency/Currency";

function App() {
  return (
    <BrowserRouter basename="/money-guard">
      <Routes>
        <Route path="Currency" element={<Currency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
