const Contacto = () => {
  return (
    <section id="contacto" className="py-20 px-10 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-12">
        COMUNÍCATE CON NOSOTROS
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORMULARIO */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h3 className="text-xl font-semibold mb-6">
            Déjanos tu consulta
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Tu Nombre *"
              className="w-full p-3 border rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Tu Email *"
              className="w-full p-3 border rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Tu Teléfono"
              className="w-full p-3 border rounded-lg outline-none"
            />

            <textarea
              placeholder="Tu Mensaje"
              rows="4"
              className="w-full p-3 border rounded-lg outline-none"
            ></textarea>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
              Enviar Consulta
            </button>

          </form>
        </div>

        {/* INFORMACIÓN */}
        <div className="space-y-6">

          <div>
            <h3 className="font-semibold text-lg mb-2">Encuéntranos:</h3>
            <p className="text-gray-600">
              Dirección: Av. Benavides 3008. Lima
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Comunícate con nosotros:
            </h3>
            <p> Telefono:+51 943 812 536</p>
            <p> Email: polylinesac@yahoo.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Horario:</h3>
            <p className="text-gray-600">
              Lunes a viernes <br />
              09:00 a. m. - 05:00 p. m.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contacto