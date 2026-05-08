const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro premium */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-sky-900/40 to-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">

        <span className="uppercase tracking-[5px] text-sky-400 text-sm md:text-base">
          Ingeniería • Construcción • Arquitectura
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-4 mb-6">
          Construimos el <span className="text-sky-400">futuro</span> que imaginas
        </h1>

        <p className="mb-10 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Soluciones modernas e innovadoras para proyectos de construcción,
          infraestructura y desarrollo arquitectónico.
        </p>

        {/* Buscador premium */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-5 rounded-2xl flex flex-col md:flex-row gap-3 shadow-2xl max-w-3xl mx-auto">

          <select className="p-4 outline-none rounded-xl w-full bg-white/90 text-gray-700">
            <option>Maquinaria</option>
            <option>Anclajes</option>
            <option>Construcción</option>
          </select>

          <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl transition duration-300 hover:scale-105 shadow-lg font-semibold">
            Buscar
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;