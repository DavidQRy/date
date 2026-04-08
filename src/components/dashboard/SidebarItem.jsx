export function SidebarItem({ children, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-1 cursor-pointer transition 
      ${active ? 'text-[#c96a3f]' : 'text-gray-500 hover:text-[#c96a3f]'}`}
    >
      <svg viewBox='0 0 24 24' className='w-6 h-6'>
        {children}
      </svg>
      <span className='text-[10px]'>{label}</span>
    </div>
  );
}
