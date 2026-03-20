import { MapPin, Smartphone, Zap } from 'lucide-react';

const PorQueDate = () => {
    const brand = '#c96a3f';
    const cardBg = '#faf8f4';
    const borderColor = '#ddd8cf';
    const serif = "'Instrument Serif', serif";

    const razones = [
        {
            icon: MapPin,
            title: 'Diseñado para Colombia',
            desc: 'Precios en pesos, terminología local y flujos adaptados a la normativa de tu negocio.'
        },
        {
            icon: Smartphone,
            title: 'Funciona en tu celular',
            desc: 'Sin instalar nada. Accede desde cualquier dispositivo con una experiencia fluida y rápida.'
        },
        {
            icon: Zap,
            title: 'Todo integrado',
            desc: 'Agenda y ventas comparten la misma base. Sin duplicar datos y sin perder tiempo valioso.'
        },
    ];

    return (
        <section className="py-20 px-6 bg-transparent">
            <div className="max-w-4xl mx-auto">
                {/* Label superior */}
                <p
                    className="text-center text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
                    style={{ color: brand }}
                >
                    ¿Por qué DATE?
                </p>

                {/* Título con Serif */}
                <h2
                    className="text-center text-3xl md:text-4xl text-slate-900 mb-16 leading-tight"
                    style={{ fontFamily: serif }}
                >
                    Hecho para el negocio colombiano.
                </h2>

                {/* Grid de beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {razones.map((item, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-[24px] border transition-all duration-300 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)]"
                            style={{ background: cardBg, borderColor: borderColor }}
                        >
                            {/* Contenedor de Icono con sutil fondo circular al hacer hover */}
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-full mb-6 transition-transform group-hover:scale-110"
                                style={{ background: `${brand}10` }}
                            >
                                <item.icon size={24} style={{ color: brand }} strokeWidth={1.5} />
                            </div>

                            {/* Título de la tarjeta */}
                            <h4 className="text-[16px] font-bold text-slate-900 mb-3">
                                {item.title}
                            </h4>

                            {/* Descripción con interlineado optimizado */}
                            <p className="text-[13px] text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PorQueDate;