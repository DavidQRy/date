import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from '../pages/Auth.jsx';
import { LandingPage } from '../pages/LandingPage.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      {/* Catch-all: redirige a Landing */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}
