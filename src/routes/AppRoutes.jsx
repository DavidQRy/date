import { Routes, Route, Navigate } from 'react-router-dom';
<<<<<<< HEAD
import { Auth } from '../Auth.jsx';
=======
import { Login } from '../login.jsx';
>>>>>>> 0f6858d3893b97247c31b9c2e966cb1745d8d4ed
import { LandingPage } from '../pages/LandingPage.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
      <Route path="/Auth" element={<Auth />} />
=======
      <Route path="/login" element={<Login />} />
>>>>>>> 0f6858d3893b97247c31b9c2e966cb1745d8d4ed
      {/* Catch-all: redirige a Landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
