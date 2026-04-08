import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarItem } from '../ui/SidebarItem';

const MENU_ITEMS = [
  {
    label: 'Dashboard',
    path: '/dateDashboard',
    icon: (
      <>
        <rect x='3' y='3' width='7' height='7' rx='1' />
        <rect x='14' y='3' width='7' height='7' rx='1' />
        <rect x='3' y='14' width='7' height='7' rx='1' />
        <rect x='14' y='14' width='7' height='7' rx='1' />
      </>
    ),
  },
  {
    label: 'Punto de Venta',
    path: '/pos',
    icon: (
      <>
        <circle cx='9' cy='21' r='1' />
        <circle cx='20' cy='21' r='1' />
        <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
      </>
    ),
  },
  {
    label: 'Agenda',
    path: '/agenda',
    icon: (
      <>
        <rect x='3' y='4' width='18' height='18' rx='2' />
        <line x1='16' y1='2' x2='16' y2='6' />
        <line x1='8' y1='2' x2='8' y2='6' />
        <line x1='3' y1='10' x2='21' y2='10' />
      </>
    ),
  },
  {
    label: 'Clientes',
    path: '/clientes',
    icon: (
      <>
        <circle cx='9' cy='7' r='4' />
        <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
      </>
    ),
  },
  {
    label: 'Reportes',
    path: '/reportes',
    icon: (
      <>
        <line x1='18' y1='20' x2='18' y2='10' />
        <line x1='12' y1='20' x2='12' y2='4' />
        <line x1='6' y1='20' x2='6' y2='14' />
      </>
    ),
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='w-20 bg-[#faf8f4] border-r border-[#ddd8cf] flex flex-col items-center py-4 justify-between'>
      <div className='flex flex-col items-center gap-6'>
        <div className='text-xl font-bold text-[#c96a3f] mb-2'>d</div>
        {MENU_ITEMS.map(item => (
          <SidebarItem key={item.label} label={item.label} active={location.pathname === item.path} onClick={() => navigate(item.path)}>
            {item.icon}
          </SidebarItem>
        ))}
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='w-10 h-10 bg-[#c96a3f] text-white flex items-center justify-center rounded-full text-sm font-medium'>JM</div>
        <span className='text-xs text-gray-500'>Juan</span>
      </div>
    </nav>
  );
}
