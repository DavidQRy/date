import './App.css'


export function Login() {

const fondoSection = {
    background: "#"
}
    
const estiloBienvenida = {
  fontFamily: "'Instrument Serif', serif",
  fontSize: "30px",
  fontWeight: 400,
  lineHeight: 1.15,
  color: "black",
  marginBottom: "6px"
}

const estiloNuevo = {
  color: "#c96a3f",
  fontStyle: "italic"
}

const Subs = {
      fontSize: "13px",
      color: "var(--muted)",
      opacity: "0.6",
      marginBottom: "36px",
      lineHeight: "1.5"
}

const Field = {
    fontFamily: "Geist, sans-serif",
    fontSize: "14px",
    color:"var(--text)"
    
}
    return(
     
        
            
        
   <section className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">

    
   
      <form className="bg-[#faf8f4] border border-[#ddd8cf] p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] h-160  w-110 flex flex-col gap-5">

        <h1 className="text-2xl font-bold text-gray-800 text-left mb-5">
          Date
        </h1>

          <h1 style={estiloBienvenida} className="flex flex-col">
      Hola de <em style={estiloNuevo}>nuevo.</em>
       
       
       <p style={Subs}>
      Ingresa para gestionar tu agenda y punto de venta.
    </p>
    </h1>


        <div className="flex flex-col gap-1">
          <label style={Field} className="text-sm text-gray-600">
            CORREO
          </label>

          <input
            id="email"
            type="email"
            placeholder="usuario@correoelectronico.com"
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white
            focus:outline-none focus:ring-2 focus:ring-[#c96a3f] focus:border-[#c96a3f]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label style={Field} className="text-sm text-gray-600">
            CONTRASEÑA
          </label>

          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white
            focus:outline-none focus:ring-2 focus:ring-[#c96a3f] focus:border-[#c96a3f]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#c96a3f] text-white py-2 rounded-lg font-medium
          hover:bg-[#b85e36] transition"
        >
          Iniciar sesión
        </button>

      </form>

    </section>
  )

}
