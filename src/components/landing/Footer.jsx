import React from 'react';

const Footer = ({ cardBg, borderColor }) => {
  return (
    <footer
      className='px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t'
      style={{ background: cardBg, borderColor: borderColor }}
    >
      <div className='flex flex-col items-center md:items-start gap-4'>
        <img src='/logo.png' alt='DATE' className='h-7 w-auto opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer' />
        <p className='text-[12px] text-slate-400'>© {new Date().getFullYear()} DATE — Hecho para el comercio en Colombia.</p>
      </div>

      <nav className='flex gap-8 text-[12px] font-medium text-slate-400'>
        <a href='#' className='hover:text-slate-600 transition-colors'>
          Términos
        </a>
        <a href='#' className='hover:text-slate-600 transition-colors'>
          Privacidad
        </a>
        <a href='#' className='hover:text-slate-600 transition-colors'>
          Soporte
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
