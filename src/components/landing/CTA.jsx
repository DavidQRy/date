import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const CTA = ({ brand, serif, pageBg }) => {
  return (
    <section className='py-20 px-6' style={{ background: brand }}>
      <div className='max-w-xl mx-auto flex flex-col items-center text-center gap-6'>
        <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2'>
          <Rocket className='text-white w-6 h-6' />
        </div>

        <h2 className='text-3xl md:text-4xl text-white leading-tight' style={{ fontFamily: serif, fontWeight: 400 }}>
          Tu negocio merece una herramienta a su altura.
        </h2>

        <p className='text-white/80 text-[15px] leading-relaxed max-w-md'>
          Únete a los negocios colombianos que ya gestionan sus citas e inventario con DATE.
        </p>

        <Link
          to='/register'
          className='bg-white text-[14px] font-bold px-10 py-4 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95'
          style={{ color: brand }}
        >
          Crear mi cuenta gratis →
        </Link>
      </div>
    </section>
  );
};

export default CTA;
