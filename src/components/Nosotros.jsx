const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 px-10 bg-white">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Nosotros
          </h2>

          <p className="text-gray-600 mb-6">
            Polyline SAC es una empresa constructora que inició actividades en marzo del 2002. 
            Con más de 21 años de experiencia, ha desarrollado diversos proyectos de construcción 
            brindando calidad y confianza a sus clientes.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Habilitaciones Urbanas</li>
            <li>✅ Demolición de edificaciones de hasta 3,500 m² techados</li>
            <li>✅ Remodelaciones que transforman espacios.</li>
          </ul>
        </div>

        {/* Imagen */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="construcción"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>

    </section>
  )
}

export default Nosotros