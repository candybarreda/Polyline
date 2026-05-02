import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-gradient-to-r from-sky-900 via-sky-700 to-cyan-500 text-white px-6 md:px-10 py-16"
    >
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold">POLYLINE</h1>
          </div>

          <p className="text-gray-200">
            Creamos espacios modernos pensados para tu futuro y bienestar.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
            <p className="text-gray-200">
              Av. Benavides 3008, Lima
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Contacto</h3>
            <p>+51 943 812 536</p>
            <p>polylinesac@yahoo.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Horario</h3>
            <p className="text-gray-200">
              Lunes a viernes <br />
              09:00 a.m. - 05:00 p.m.
            </p>
          </div>
        </div>

        {/* Formulario moderno */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">

          <h3 className="text-xl font-semibold mb-4">
            Déjanos tu consulta
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Tu Nombre *"
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 outline-none"
            />

            <input
              type="email"
              placeholder="Tu Email *"
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 outline-none"
            />

            <input
              type="text"
              placeholder="Tu Teléfono"
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 outline-none"
            />

            <textarea
              placeholder="Tu Mensaje"
              rows="4"
              className="w-full p-3 rounded-lg bg-white/80 text-gray-800 outline-none"
            ></textarea>

            <button className="bg-sky-500 hover:bg-sky-600 w-full py-3 rounded-xl transition duration-300 hover:scale-105 shadow-lg">
              Enviar Consulta
            </button>

          </form>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center">

        <h2 className="font-semibold mb-4">Síguenos</h2>

        <div className="flex justify-center gap-6 text-xl mb-4">

          <a
            href="https://www.facebook.com/PolylineSalas"
            target="_blank"
            className="bg-white/20 p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/arquitectosalasperu/"
            target="_blank"
            className="bg-white/20 p-3 rounded-full hover:bg-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=51943812536"
            target="_blank"
            className="bg-white/20 p-3 rounded-full hover:bg-green-500 transition"
          >
            <FaWhatsapp />
          </a>

        </div>

        <p className="text-sm text-gray-200">
          © 2025 POLYLINE. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;