import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  const token = useSelector(state => state.auth.token);
  const isLoggedIn = Boolean(token);

  return (
    <Routes>
      {/* Giriş yapılmamışsa Register ve Login'e izin ver */}
      <Route path="/register" element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/dashboard" />} />
      <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/dashboard" />} />

      {/* Dashboard korumalı rota */}
      <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />

      {/* Bilinmeyen route -> login'e yönlendir */}
      <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
    </Routes>
  );
}

export default App;
