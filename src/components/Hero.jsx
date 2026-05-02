const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">

      {/* Imagen de fondo */}
      <img
        src="/images/planing.jpg"
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay premium */}
      <div className="absolute w-full h-full bg-gradient-to-r from-sky-900/70 via-sky-600/50 to-cyan-400/40"></div>

      {/* Contenido */}
      <div className="relative text-center text-white px-6 max-w-4xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Encuentra el hogar <br className="hidden md:block"/> perfecto para ti
        </h1>

        <p className="mb-10 text-lg md:text-xl text-gray-200">
          Proyectos inmobiliarios modernos, ubicaciones estratégicas y la mejor inversión para tu futuro.
        </p>

        {/* Buscador estilo Airbnb */}
        <div className="bg-white/90 backdrop-blur-md p-4 md:p-5 rounded-2xl flex flex-col md:flex-row gap-3 shadow-2xl">

          <input
            type="text"
            placeholder=" ¿que proyecto quieres construir?"
            className="p-3 outline-none rounded-lg w-full text-gray-700"
          />

          <select className="p-3 rounded-lg text-gray-700">
            <option>Cotizar</option>
            <option>Ver Proyectos</option>
          </select>

          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl transition duration-300 hover:scale-105 shadow-md">
            Buscar
          </button>

        </div>

        {/* Botón secundario */}
        <div className="mt-6">
          <button className="border border-white/50 px-6 py-3 rounded-xl hover:bg-white hover:text-sky-700 transition duration-300">
            Ver proyectos
          </button>
        </div>

      </div>

    </section>
  )
}

export default Hero