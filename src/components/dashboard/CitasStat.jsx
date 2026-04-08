import { motion } from 'framer-motion';
import { Stat } from '../ui/Stat';

export function CitasStat({ value, progress }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='flex items-center gap-6'>
      <Stat label='Citas' value={value} />

      <div className='relative w-20 h-20'>
        <motion.div
          className='absolute inset-0 rounded-full blur-xl'
          style={{
            background: 'radial-gradient(circle, rgba(201,106,63,0.3) 0%, transparent 70%)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg className='w-full h-full -rotate-90' viewBox='0 0 80 80'>
          <defs>
            <linearGradient id='progressGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#c96a3f' />
              <stop offset='100%' stopColor='#f59e0b' />
            </linearGradient>
          </defs>

          <circle cx='40' cy='40' r={radius} stroke='#e5e0d6' strokeWidth='8' fill='none' />

          <motion.circle
            cx='40'
            cy='40'
            r={radius}
            stroke='url(#progressGrad)'
            strokeWidth='8'
            fill='none'
            strokeLinecap='round'
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
          />
        </svg>

        <div className='absolute inset-0 flex items-center justify-center'>
          <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className='text-sm font-bold text-gray-800'>
            {Math.round(progress)}%
          </motion.span>
        </div>
      </div>
    </div>
  );
}
