import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";

const AppRouter = () => {
  const isLoggedIn = true; // Login işlemi tamamlanınca bu true olacak

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
      />
      <Route path="/home" element={<HomeDashboard />} />
      <Route path="/statistics" element={<StatisticsDashboard />} />
    </Routes>
  );
};

export default AppRouter;
