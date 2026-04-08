import { useState } from 'react';
import { motion } from 'framer-motion';
import { Stat } from './Stat';
import { CitasStat } from './CitasStat';

export function ResumenPeriodoCard() {
  const tabs = ['Hoy', 'Semana', 'Mes', 'Año'];
  const [active, setActive] = useState('Año');

  const data = {
    Hoy: { trans: 120, ticket: 18.2, sat: 88, citas: 32 },
    Semana: { trans: 840, ticket: 19.5, sat: 90, citas: 210 },
    Mes: { trans: 3200, ticket: 20.1, sat: 91, citas: 980 },
    Año: { trans: 9840, ticket: 20.1, sat: 92, citas: 3120 },
  };

  const current = data[active];

  return (
    <div className='bg-[#f5f1eb] p-8 rounded-3xl border border-[#e6e1d8] shadow-sm'>
      {/* HEADER */}
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-xs tracking-widest text-gray-500 font-semibold'>RESUMEN DEL PERIODO</h2>

        {/* TABS PRO */}
        <div className='relative flex bg-[#e9e4db] p-1 rounded-xl'>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} className='relative px-4 py-1.5 text-sm font-medium z-10'>
              {active === tab && (
                <motion.div
                  layoutId='pill'
                  className='absolute inset-0 bg-[#c96a3f] rounded-lg'
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}

              <span className={`relative z-10 ${active === tab ? 'text-white' : 'text-gray-600'}`}>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className='grid grid-cols-4 gap-10 items-center'>
        {/* Transacciones */}
        <Stat label='Transacciones' value={current.trans} />

        {/* Ticket */}
        <Stat label='Ticket prom.' value={`$${current.ticket}`} highlight />

        {/* Satisfacción */}
        <Stat label='Satisfacción' value={`${current.sat}%`} green />

        {/* Citas + circle */}
        <CitasStat value={current.citas} progress={current.sat} />
      </div>
    </div>
  );
}
