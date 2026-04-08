import { useNavigate } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import { ResumenPeriodoCard } from './Periodo';

export function Layout() {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen bg-[#f5f1eb] text-gray-800'>
      {/* SIDEBAR */}
      <nav className='w-20 bg-[#faf8f4] border-r border-[#ddd8cf] flex flex-col items-center py-4 justify-between'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-xl font-bold text-[#c96a3f]'>d</div>

          {/* ITEMs */}
          <SidebarItem label='Dashboard' active onClick={() => navigate('/dateDashboard')}>
            <rect x='3' y='3' width='7' height='7' rx='1' />
            <rect x='14' y='3' width='7' height='7' rx='1' />
            <rect x='3' y='14' width='7' height='7' rx='1' />
            <rect x='14' y='14' width='7' height='7' rx='1' />
          </SidebarItem>

          <SidebarItem label='Punto de Venta'>
            <circle cx='9' cy='21' r='1' />
            <circle cx='20' cy='21' r='1' />
            <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
          </SidebarItem>

          <SidebarItem label='Agenda'>
            <rect x='3' y='4' width='18' height='18' rx='2' />
            <line x1='16' y1='2' x2='16' y2='6' />
            <line x1='8' y1='2' x2='8' y2='6' />
            <line x1='3' y1='10' x2='21' y2='10' />
          </SidebarItem>

          <SidebarItem label='Clientes'>
            <circle cx='9' cy='7' r='4' />
            <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
          </SidebarItem>

          <SidebarItem label='Reportes'>
            <line x1='18' y1='20' x2='18' y2='10' />
            <line x1='12' y1='20' x2='12' y2='4' />
            <line x1='6' y1='20' x2='6' y2='14' />
          </SidebarItem>
        </div>

        {/* USER */}
        <div className='flex flex-col items-center gap-2'>
          <div className='w-10 h-10 bg-[#c96a3f] text-white flex items-center justify-center rounded-full text-sm font-medium'>JM</div>
          <span className='text-xs text-gray-500'>Juan</span>
        </div>
      </nav>

      {/* MAIN */}
      <div className='flex flex-col flex-1'>
        {/* Topbar */}
        <div className='h-16 bg-[#faf8f4] border-b border-[#ddd8cf] flex items-center justify-between px-6'>
          <div className='flex flex-col'>
            <span className='text-lg font-semibold'>
              date <em className='text-[#c96a3f]'>·</em> Dashboard
            </span>
            <span className='text-xs text-gray-500'>Jueves, 26 de marzo 2026</span>
          </div>

          <div className='flex items-center gap-4'>
            {/* Live */}
            <div className='flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm shadow'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              En vivo
            </div>

            {/* Notis */}
            <button className='p-2 rounded-lg hover:bg-[#f0ebe3] transition'>🔔</button>

            {/* Noche no funcional xd */}
            <button className='p-2 rounded-lg hover:bg-[#f0ebe3] transition'>🌙</button>
          </div>
        </div>

        {/* contenido */}
        <main className='p-6 overflow-y-auto'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-5 rounded-2xl shadow hover:shadow-lg transition'>
              <h2 className='text-sm text-gray-500'>Ventas</h2>
              <p className='text-2xl font-bold mt-2'>100</p>
            </div>

            <div>
              <ResumenPeriodoCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
