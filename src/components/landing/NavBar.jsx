import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Constantes de estilo para mantener la identidad visual
  const brandColor = '#c96a3f';
  const brandHover = '#b85e36';
  const cardBg = '#faf8f4';
  const borderColor = '#ddd8cf';

  return (
    <nav
      className='sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b transition-all duration-300 shadow-sm'
      style={{ background: cardBg, borderColor: borderColor }}
    >
      {/* ── LOGO ────────────────────────────────────────── */}
      <div className='flex items-center'>
        <Link to='/'>
          <img src='/logo.png' alt='DATE' className='h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity' />
        </Link>
      </div>

      {/* ── ACCIONES / BOTONES ───────────────────────────── */}
      <div className='flex items-center gap-3 md:gap-5'>
        {/* Botón de Registro (Estilo secundario/discreto) */}
        <Link
          to='/register'
          className='hidden md:block text-[13px] font-bold text-slate-500 hover:text-slate-800 transition-colors px-4 py-2'
        >
          Crear cuenta
        </Link>

        {/* Botón de Login (Call to Action principal) */}
        <Link
          to='/login'
          className='text-[13px] font-bold text-white px-6 py-2.5 rounded-full shadow-md shadow-orange-900/10 transition-all transform hover:scale-[1.02] active:scale-[0.98]'
          style={{ background: brandColor }}
          onMouseEnter={e => (e.currentTarget.style.background = brandHover)}
          onMouseLeave={e => (e.currentTarget.style.background = brandColor)}
        >
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
