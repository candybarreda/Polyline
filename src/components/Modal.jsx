import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Modal = ({ isOpen, onClose, images, title }) => {
  const [current, setCurrent] = useState(0)

  // ✅ AQUÍ VA EL useEffect
  useEffect(() => {
    setCurrent(0)
  }, [images])

  if (!isOpen) return null

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const phone = "51943812536"

  const message = `Hola, estoy interesado en el servicio: ${title}`

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-2xl max-w-2xl w-full relative"
      >

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Galería del proyecto
        </h2>

        <div className="relative">

          <img
            src={images[current]}
            alt="slide"
            className="w-full h-80 object-cover rounded-lg"
          />

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>

        </div>

        <p className="text-center mt-4 text-gray-600">
          {current + 1} / {images.length}
        </p>

        {/* 🔥 BOTÓN WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Ver más por WhatsApp
        </a>

      </motion.div>

    </div>
  )
}

export default Modal