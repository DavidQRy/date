import { useState, useEffect } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';


export function Auth() {
  const [isRegister, setIsRegister] = useState(false);

   useEffect(() => {
     document.title = isRegister 
       ? 'Crear cuenta | DATE' 
       : 'Iniciar Sesión | DATE'; 
    }, [isRegister]);

  return (
    <section className='min-h-screen bg-[#f5f1eb] flex items-center justify-center'>
      <form className='bg-[#faf8f4] border border-[#ddd8cf] p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-110 flex flex-col gap-5 overflow-hidden'>

        <h1 className='text-2xl font-bold text-gray-800'>Date</h1>

        {/* tituños */}
        <div className='flex flex-col'>
          <h1 className='text-[30px] font-serif'>
            {isRegister ? (
              <>Crea tu <em className='text-[#c96a3f]'>cuenta.</em></>
            ) : (
              <>Hola de <em className='text-[#c96a3f]'>nuevo.</em></>
            )}
          </h1>
          <p className='text-sm opacity-60 mb-4'>
            {isRegister
              ? 'Regístrate para comenzar a usar la plataforma.'
              : 'Ingresa para gestionar tu agenda y punto de venta.'}
          </p>
        </div>

        {/* animacion */}
        <div className='relative h-[260px]'>

          <div
            className={`absolute w-full transition-all duration-500 ${
              isRegister
                ? 'opacity-0 -translate-x-10 scale-95 blur-sm pointer-events-none'
                : 'opacity-100 translate-x-0 scale-100'
            }`}
          >
            <LoginForm />
          </div>

          <div
            className={`absolute w-full transition-all duration-500 ${
              isRegister
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-10 scale-95 blur-sm pointer-events-none'
            }`}
          >
            <RegisterForm />
          </div>
        </div>

        <br></br>

        {/* switch*/}
        <p className='text-sm text-center text-gray-600'>
          {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <span
            onClick={() => setIsRegister(!isRegister)}
            className='text-[#c96a3f] cursor-pointer font-medium hover:underline'
          >
            {isRegister ? 'Inicia sesión' : 'Regístrate'}
          </span>
        </p>

      </form>
    </section>
  );
}