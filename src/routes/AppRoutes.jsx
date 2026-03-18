import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../login.jsx';
import { LandingPage } from '../pages/LandingPage.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      {/* Catch-all: redirige a Landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
