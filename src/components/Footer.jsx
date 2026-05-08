import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Contacto from "./Contacto";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-[#123458] text-white px-6 md:px-10 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">

        {/* Logo */}
        <div>

          <div className="flex items-center gap-4 mb-6">

            <img
              src="/images/logo.png"
              alt="logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-3xl font-extrabold tracking-wide">
                POLYLINE
              </h1>

              <span className="text-sm tracking-[4px] uppercase text-[#4A90A4]">
                Constructora
              </span>
            </div>

          </div>

          <p className="text-gray-300 leading-relaxed max-w-sm">
            Creamos espacios modernos, seguros y funcionales
            para proyectos de construcción e infraestructura.
          </p>

        </div>

        {/* Contacto */}
        <div className="space-y-8">

          <div>
            <h3 className="font-bold text-xl mb-3 text-[#F97316]">
              Ubicación
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Av. Benavides 3008, Lima
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3 text-[#F97316]">
              Contacto
            </h3>

            <p className="text-gray-300">
              +51 943 812 536
            </p>

            <p className="text-gray-300">
              polylinesac@yahoo.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3 text-[#F97316]">
              Horario
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Lunes a viernes <br />
              09:00 a.m. - 05:00 p.m.
            </p>
          </div>

        </div>

        {/* Formulario */}
        <div
          className="
          bg-white/10
          backdrop-blur-xl
          p-8
          rounded-3xl
          shadow-2xl
          border
          border-white/10
          "
        >

          <h3 className="text-2xl font-bold mb-6">
            Déjanos tu consulta
          </h3>

          <Contacto/>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-white/10 pt-8 text-center">

        <h2 className="font-semibold mb-6 text-[#4A90A4] tracking-wide uppercase">
          Síguenos
        </h2>

        {/* Redes */}
        <div className="flex justify-center gap-5 text-xl mb-6">

          <a
            href="https://www.facebook.com/PolylineSalas"
            target="_blank"
            className="
            bg-white/10
            p-4
            rounded-full
            hover:bg-[#4A90A4]
            transition-all
            duration-300
            hover:scale-110
            "
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/arquitectosalasperu/"
            target="_blank"
            className="
            bg-white/10
            p-4
            rounded-full
            hover:bg-[#F97316]
            transition-all
            duration-300
            hover:scale-110
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=51943812536"
            target="_blank"
            className="
            bg-white/10
            p-4
            rounded-full
            hover:bg-green-500
            transition-all
            duration-300
            hover:scale-110
            "
          >
            <FaWhatsapp />
          </a>

        </div>

        <p className="text-sm text-gray-400">
          © 2025 POLYLINE. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
};

export default Footer;