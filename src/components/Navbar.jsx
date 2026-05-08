import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#F3F4F6]/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-[#123458]/40 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="/logo.png"
            alt="POLYLINE"
            className="w-11 h-11 object-contain"
          />

          <div className="flex flex-col leading-none">

            <span
              className={`text-2xl font-extrabold tracking-wide transition-colors duration-300
              ${
                scrolled
                  ? "text-[#123458]"
                  : "text-white"
              }`}
            >
              POLYLINE
            </span>

            <span
              className={`text-xs tracking-[4px] uppercase transition-colors duration-300
              ${
                scrolled
                  ? "text-[#1F2937]/70"
                  : "text-gray-200"
              }`}
            >
              Constructora
            </span>

          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-medium">

          {[
            ["Inicio", "#inicio"],
            ["Proyectos", "#proyectos"],
            ["Nosotros", "#nosotros"],
            ["Contacto", "#contacto"],
          ].map(([name, link]) => (
            <a
              key={name}
              href={link}
              className={`relative transition-all duration-300
              hover:text-[#4A90A4]
              ${
                scrolled
                  ? "text-[#1F2937]"
                  : "text-white"
              }`}
            >
              {name}

              {/* Línea hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F97316] transition-all duration-300 hover:w-full"></span>

            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">

          <a
            href="#contacto"
            className="bg-[#F97316] hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:scale-105 font-semibold"
          >
            Solicitar Cotización
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;