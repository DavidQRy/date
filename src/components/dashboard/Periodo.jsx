import { useState } from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../ui/Stat';
import { CitasStat } from './CitasStat';

const PERIOD_DATA = {
  Hoy: { trans: 120, ticket: 18.2, sat: 88, citas: 32 },
  Semana: { trans: 840, ticket: 19.5, sat: 90, citas: 210 },
  Mes: { trans: 3200, ticket: 20.1, sat: 91, citas: 980 },
  Año: { trans: 9840, ticket: 20.1, sat: 92, citas: 3120 },
};

export function ResumenPeriodoCard() {
  const [active, setActive] = useState('Año');
  const current = PERIOD_DATA[active];

  return (
    <section className='bg-[#f5f1eb] p-8 rounded-3xl border border-[#e6e1d8] shadow-sm'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-xs tracking-widest text-gray-400 font-bold'>RESUMEN DEL PERIODO</h2>

        <div className='flex bg-[#e9e4db] p-1 rounded-xl'>
          {Object.keys(PERIOD_DATA).map(tab => (
            <button key={tab} onClick={() => setActive(tab)} className='relative px-4 py-1.5 text-sm font-medium transition'>
              {active === tab && <motion.div layoutId='pill' className='absolute inset-0 bg-[#c96a3f] rounded-lg' />}
              <span className={`relative z-10 ${active === tab ? 'text-white' : 'text-gray-500'}`}>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center'>
        <Stat label='Transacciones' value={current.trans} />
        <Stat label='Ticket prom.' value={`$${current.ticket}`} highlight />
        <Stat label='Satisfacción' value={`${current.sat}%`} green />
        <CitasStat value={current.citas} progress={current.sat} />
      </div>
    </section>
  );
}
