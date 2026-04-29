const Navbar = () => {
  return (
    <nav className="absolute w-full z-20 flex justify-between items-center px-10 py-6 bg-white">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black tracking-wide">
      <img
        src="src/assets/logo.png"
        alt="hero"
        className="w-1/2"
      />
      POLYLINE
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-gray font-medium">
      
        <a href="#inicio" className="hover:text-blue-400 transition">
          Inicio
        </a>
        <a href="#proyectos" className="hover:text-blue-400 transition">
          Proyectos
        </a>
        <a href="#nosotros" className="hover:text-blue-400 transition">
          Nosotros
        </a>
        <a href="#contacto" className="hover:text-blue-400 transition">
          Contactanos
        </a>
      </div>

     
    </nav>
  )
}

export default Navbar