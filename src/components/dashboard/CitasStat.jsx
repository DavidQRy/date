import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Stat } from './Stat';

export function CitasStat({ value, progress }) {
  const [animated, setAnimated] = useState(0);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setAnimated(0);

    const timeout = setTimeout(() => {
      setAnimated(progress);
    }, 150);

    return () => clearTimeout(timeout);
  }, [progress]);

  const offset = circumference - (animated / 100) * circumference;

  return (
    <div className='flex items-center gap-6'>
      <Stat label='Citas' value={value} />

      <div className='relative w-20 h-20'>
        {/* GLOW */}
        <motion.div
          className='absolute inset-0 rounded-full blur-xl'
          style={{
            background: 'radial-gradient(circle, rgba(201,106,63,0.4) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <svg className='w-full h-full -rotate-90'>
          {/* DEFINICIÓN GRADIENTE */}
          <defs>
            <linearGradient id='grad'>
              <stop offset='0%' stopColor='#c96a3f' />
              <stop offset='100%' stopColor='#f59e0b' />
            </linearGradient>
          </defs>

          {/* fondo */}
          <circle cx='40' cy='40' r={radius} stroke='#e5e0d6' strokeWidth='8' fill='none' />

          {/* círculo animado */}
          <motion.circle
            cx='40'
            cy='40'
            r={radius}
            stroke='url(#grad)'
            strokeWidth='8'
            fill='none'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap='round'
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1], // rebote estilo Apple
            }}
          />
        </svg>

        {/* TEXTO */}
        <motion.div
          key={animated}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-800'
        >
          {animated}%
        </motion.div>
      </div>
    </div>
  );
}
