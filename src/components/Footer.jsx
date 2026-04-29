import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300 px-10 py-16">

      <div className="grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">
          <img
          src="src/assets/logo.png"
          alt="hero"
          className="w-1/2"
           />
            POLYLINE
          </h1>
          
        </div>

        {/* Contacto */}
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

         {/* FORMULARIO */}
         <div className="bg-oklch(80.9% 0.105 251.813) p-8 rounded-2xl shadow-lg">

          <h3 className="text-xl font-semibold mb-4">
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
                    

      </div>

      {/* Línea */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
         {/* Links */}
         <div>
          <h2 className="text-white font-semibold mb-4">Síguenos</h2>

          <div className="flex justify-center gap-4 text-2xl">

            <a
              href="https://www.facebook.com/PolylineSalas"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/arquitectosalasperu/"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=51943812536"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>
      © 2025 POLYLINE. Todos los derechos reservados.
      </div>

    </footer>
  )
}

export default Footer