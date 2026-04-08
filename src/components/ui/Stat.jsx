import { motion } from 'framer-motion';

export function Stat({ label, value, highlight, green }) {
  const textColor = highlight ? 'text-[#c96a3f]' : green ? 'text-green-600' : 'text-gray-800';

  return (
    <motion.div key={value} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <p className={`text-4xl font-bold ${textColor}`}>{value}</p>
      <p className='text-sm text-gray-500 mt-1'>{label}</p>
    </motion.div>
  );
}
