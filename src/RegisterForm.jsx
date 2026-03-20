export function RegisterForm() {
  return (
    <div className='flex flex-col gap-4'>

      <div className='flex flex-col gap-1'>
        <label className='text-sm'>NOMBRE</label>
        <input
          type='text'
          placeholder='Tu nombre'
          className='input px-4 py-2 border border-gray-300 rounded-lg bg-white 
  focus:outline-none focus:ring-2 focus:ring-[#c96a3f] 
  transition duration-300'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm'>CORREO</label>
        <input
          type='email'
          placeholder='usuario@correo.com'
          className='input px-4 py-2 border border-gray-300 rounded-lg bg-white 
  focus:outline-none focus:ring-2 focus:ring-[#c96a3f] 
  transition duration-300'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm'>CONTRASEÑA</label>
        <input
          type='password'
          placeholder='Contraseña'
          className='input px-4 py-2 border border-gray-300 rounded-lg bg-white 
  focus:outline-none focus:ring-2 focus:ring-[#c96a3f] 
  transition duration-300'
        />
      </div>

      <button className='btn bg-[#c96a3f] text-white py-2 rounded-lg font-medium 
  hover:bg-[#b85e36] transition duration-300 
  hover:scale-[1.02] active:scale-[0.98]'>
        Registrarse
      </button>

    </div>
  );
}