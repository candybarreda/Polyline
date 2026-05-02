import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 transition-all duration-300 
      ${scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md" 
        : "bg-transparent"
      }`}
    >
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-xl font-bold text-white md:text-black">
          POLYLINE
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 font-medium">
        <a href="#inicio" className="text-white md:text-gray-800 hover:text-sky-500 transition">
          Inicio
        </a>
        <a href="#proyectos" className="text-white md:text-gray-800 hover:text-sky-500 transition">
          Proyectos
        </a>
        <a href="#nosotros" className="text-white md:text-gray-800 hover:text-sky-500 transition">
          Nosotros
        </a>
        <a href="#contacto" className="text-white md:text-gray-800 hover:text-sky-500 transition">
          Contacto
        </a>
      </div>

      {/* Botón CTA */}
      <div className="hidden md:block">
        <a
          href="#contacto"
          className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-xl transition duration-300 shadow-md hover:scale-105"
        >
          Proyectos
        </a>
      </div>

    </nav>
  );
};

export default Navbar;