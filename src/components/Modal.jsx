import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, images, title }) => {

  const [current, setCurrent] = useState(0);

  // Reiniciar slider
  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (!isOpen) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // WhatsApp
  const phone = "51943812536";

  const message = `Hola, estoy interesado en el servicio: ${title}`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/80
      backdrop-blur-md
      flex
      items-center
      justify-center
      z-50
      px-4
      "
    >

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="
        relative
        bg-gradient-to-b
        from-[#123458]
        to-[#1F2937]
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        shadow-2xl
        max-w-4xl
        w-full
        "
      >

        {/* Glow */}
        <div
          className="
          absolute
          top-0
          right-0
          w-60
          h-60
          bg-[#4A90A4]/20
          rounded-full
          blur-3xl
          "
        ></div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="
          absolute
          top-5
          right-5
          z-20
          bg-white/10
          hover:bg-[#F97316]
          text-white
          w-10
          h-10
          rounded-full
          transition-all
          duration-300
          backdrop-blur-md
          "
        >
          ✕
        </button>

        {/* Header */}
        <div className="relative z-10 p-8 pb-4">

          <span className="uppercase tracking-[4px] text-[#4A90A4] text-sm font-semibold">
            Proyecto
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            {title}
          </h2>

        </div>

        {/* Imagen */}
        <div className="relative px-8 pb-6">

          <img
            src={images[current]}
            alt="slide"
            className="
            w-full
            h-[500px]
            object-cover
            rounded-2xl
            shadow-2xl
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl mx-8"></div>

          {/* Prev */}
          <button
            onClick={prev}
            className="
            absolute
            left-12
            top-1/2
            -translate-y-1/2
            bg-black/40
            hover:bg-[#F97316]
            text-white
            w-12
            h-12
            rounded-full
            backdrop-blur-md
            transition
            duration-300
            text-xl
            "
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="
            absolute
            right-12
            top-1/2
            -translate-y-1/2
            bg-black/40
            hover:bg-[#F97316]
            text-white
            w-12
            h-12
            rounded-full
            backdrop-blur-md
            transition
            duration-300
            text-xl
            "
          >
            ›
          </button>

          {/* Indicador */}
          <div
            className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
            bg-black/40
            backdrop-blur-md
            px-4
            py-2
            rounded-full
            text-white
            text-sm
            "
          >
            {current + 1} / {images.length}
          </div>

        </div>

        {/* Footer */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
          px-8
          pb-8
          "
        >

          <p className="text-gray-300 text-center md:text-left">
            Contáctanos para recibir más información sobre este proyecto.
          </p>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-[#F97316]
            hover:bg-orange-600
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-xl
            "
          >
            Ver más por WhatsApp
          </a>

        </div>

      </motion.div>

    </div>
  );
};

export default Modal;