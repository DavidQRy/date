export function SidebarItem({ children, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 w-full transition py-1
      ${active ? 'text-[#c96a3f]' : 'text-gray-500 hover:text-[#c96a3f]'}`}
    >
      <svg
        viewBox='0 0 24 24'
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {children}
      </svg>
      <span className='text-[10px] font-medium'>{label}</span>
    </button>
  );
}
