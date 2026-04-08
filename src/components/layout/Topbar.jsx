export function Topbar() {
  const today = new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  return (
    <header className='h-16 bg-[#faf8f4] border-b border-[#ddd8cf] flex items-center justify-between px-6'>
      <div className='flex flex-col'>
        <span className='text-lg font-semibold'>
          date <em className='text-[#c96a3f]'>·</em> Dashboard
        </span>
        <span className='text-xs text-gray-500 capitalize'>{today}</span>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm shadow-sm'>
          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
          En vivo
        </div>
        <button className='p-2 rounded-lg hover:bg-[#f0ebe3]'>🔔</button>
        <button className='p-2 rounded-lg hover:bg-[#f0ebe3]'>🌙</button>
      </div>
    </header>
  );
}
