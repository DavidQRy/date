import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = ({ brand, brandHover, serif }) => {
  return (
    <section className='px-6 pt-16 pb-12 flex flex-col items-center text-center max-w-3xl mx-auto'>
      <span
        className='inline-block mb-6 px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest border transition-all'
        style={{
          color: brand,
          borderColor: `${brand}44`,
          background: `${brand}12`,
        }}
      >
        Software para negocios en Colombia
      </span>

      <h1 className='text-[38px] md:text-[54px] leading-[1.15] text-slate-900 mb-6' style={{ fontFamily: serif, fontWeight: 400 }}>
        Organiza tu agenda y{' '}
        <em className='italic' style={{ color: brand }}>
          controla tu inventario
        </em>{' '}
        en un solo lugar.
      </h1>

      <p className='text-[16px] md:text-[18px] text-slate-500 leading-relaxed mb-10 max-w-xl'>
        DATE une tu punto de venta y tu sistema de citas para que puedas enfocarte en atender a tus clientes, no en administrar papeles.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 w-full'>
        <Link
          to='/register'
          className='w-full sm:w-auto text-[14px] font-semibold text-white px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]'
          style={{ background: brand }}
          onMouseEnter={e => (e.currentTarget.style.background = brandHover)}
          onMouseLeave={e => (e.currentTarget.style.background = brand)}
        >
          Empieza gratis hoy <ArrowRight className='inline-block ml-1 w-4 h-4' />
        </Link>
        <a
          href='#funcionalidades'
          className='text-[14px] font-medium text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-8 decoration-slate-200'
        >
          Ver funcionalidades
        </a>
      </div>

      <DashboardPreview />
    </section>
  );
};

export default Hero;
