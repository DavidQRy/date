import React from 'react';
import { CalendarCheck, Store, Check } from 'lucide-react';

const Funcionalidades = () => {
  const brandColor = '#f97316';

  const features = [
    {
      icon: CalendarCheck,
      title: 'Sistema de Agenda',
      desc: 'Programa citas, gestiona tu horario y mantén el historial de cada cliente. Reduce ausencias y organiza tu día sin esfuerzo.',
      items: ['Calendario diario, semanal y mensual', 'Gestión de múltiples servicios', 'Historial completo de clientes'],
    },
    {
      icon: Store,
      title: 'Punto de Venta (POS)',
      desc: 'Registra ventas, controla tu inventario y genera reportes. Ideal para tiendas, salones, consultorios y más en Colombia.',
      items: ['Gestión de inventario en tiempo real', 'Registro de ventas y facturación', 'Reportes de ingresos y productos'],
    },
  ];

  return (
    /* ── FUNCIONALIDADES ─────────────────────────────────── */
    <section id='funcionalidades' className='py-24 px-6 bg-[#fcfaf7] border-y border-[#e8e4de]'>
      <div className='max-w-4xl mx-auto'>
        {/* Etiqueta superior */}
        <p className='text-center text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 mb-4'>Todo lo que necesitas</p>

        {/* Título Principal - Usando fuente Serif para elegancia */}
        <h2 className='font-serif text-3xl md:text-4xl text-slate-900 text-center mb-16 leading-tight'>
          Dos herramientas. Un solo sistema.
        </h2>

        {/* Grid de Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className='group bg-white border border-[#eeebe6] rounded-[24px] p-8 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1'
            >
              {/* Contenedor de Icono con color brand sutil */}
              <div className='w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-orange-100'>
                <feature.icon className='text-orange-600 w-6 h-6' strokeWidth={2} />
              </div>

              {/* Título de Funcionalidad */}
              <h3 className='font-serif text-2xl text-slate-900 mb-4'>{feature.title}</h3>

              {/* Descripción */}
              <p className='text-slate-500 text-[14px] leading-relaxed mb-8'>{feature.desc}</p>

              {/* Lista de beneficios con check personalizado */}
              <ul className='space-y-4'>
                {feature.items.map((item, i) => (
                  <li key={i} className='flex items-start gap-3 text-sm text-slate-600'>
                    <div className='mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center'>
                      <Check className='text-orange-600 w-3 h-3' strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funcionalidades;
