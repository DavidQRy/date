import React from 'react';
import { Calendar, DollarSign, Package, Users } from 'lucide-react';

const DashboardPreview = () => {
  const kpis = [
    { label: 'Citas hoy', value: '12', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Ventas del día', value: '$842.000', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Productos activos', value: '68', icon: Package, color: 'text-amber-700', bg: 'bg-amber-50' },
    { label: 'Clientes nuevos', value: '5', icon: Users, color: 'text-slate-600', bg: 'bg-slate-100' },
  ];

  return (
    <div className='w-full max-w-2xl mx-auto mt-12 px-4'>
      {/* Contenedor Principal */}
      <div className='bg-[#fcfaf7] rounded-[22px] border border-[#e8e4de] shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-6 md:p-8'>
        {/* Window Chrome */}
        <div className='flex items-center gap-2 mb-6'>
          <div className='flex gap-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-[#f87171]' />
            <div className='w-2.5 h-2.5 rounded-full bg-[#fbbf24]' />
            <div className='w-2.5 h-2.5 rounded-full bg-[#4ade80]' />
          </div>
          <span className='ml-2 text-[11px] text-slate-400 font-mono tracking-wider'>date.app / dashboard</span>
        </div>

        {/* KPI Grid - 2x2 */}
        <div className='grid grid-cols-2 gap-3 md:gap-4'>
          {kpis.map((kpi, index) => (
            <div key={index} className='bg-white border border-[#eeebe6] rounded-[18px] p-5 transition-all hover:shadow-md group'>
              {/* Header de la card: Icono y Texto al lado */}
              <div className='flex items-center gap-3 mb-4'>
                <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color} flex items-center justify-center shrink-0`}>
                  <kpi.icon size={18} strokeWidth={2.5} />
                </div>
                <span className='text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-tight'>
                  {kpi.label}
                </span>
              </div>

              {/* Valor inferior */}
              <div className='flex items-baseline'>
                <span className='text-2xl font-black text-[#1a1a1a] tracking-tight'>{kpi.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gráfico de Tendencia Centrado y Mejorado */}
        <div className='mt-6 bg-white border border-[#eeebe6] rounded-[20px] p-6'>
          <div className='flex flex-col items-center'>
            {/* Barras del gráfico centradas */}
            <div className='w-full max-w-[280px] h-20 flex items-end justify-center gap-2 mb-4'>
              {[45, 30, 65, 40, 85, 50, 70].map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-md transition-all duration-300 ${
                    i === 4 ? 'bg-orange-200' : 'bg-emerald-100 group-hover:bg-emerald-200'
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            {/* Texto inferior centrado */}
            <div className='text-center'>
              <p className='text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1'>Análisis de Ventas</p>
              <p className='text-xs text-slate-300 italic'>Tendencia de los últimos 7 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
