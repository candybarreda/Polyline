const Hero = () => {
  return (
    <section  id="inicio" className="relative h-screen flex items-center justify-center">

      {/* Imagen de fondo */}
      <img
        src="src/assets/planing.jpg"
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute w-full h-full bg-black/50"></div>

      {/* Contenido */}
      <div className="relative text-center text-white px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
        BIENVENIDO A POLYLINE

        </h1> 

        <p className="mb-8 text-lg text-gray-200">
        Proyectos inmobiliarios creados para ti.
        </p>

        {/* Buscador */}
        <div className="bg-white p-4 rounded-xl flex flex-col md:flex-row gap-3 shadow-lg">

          <input
            type="text"
            placeholder="Location"
            className="p-3 outline-none rounded-md w-full text-black"
          />

          <select className="p-3 rounded-md text-black">
            <option>Buy</option>
            <option>Rent</option>
          </select>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            Search
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero