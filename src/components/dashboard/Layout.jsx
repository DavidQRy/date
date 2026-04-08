import { Topbar } from '../layout/Topbar';
import { Sidebar } from '../layout/Sidebar';

export function Layout({ children }) {
  return (
    <div className='flex h-screen bg-[#f5f1eb] text-gray-800'>
      <Sidebar />

      <div className='flex flex-col flex-1 overflow-hidden'>
        <Topbar />

        <main className='p-6 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
}
