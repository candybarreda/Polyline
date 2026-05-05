import { motion } from "framer-motion"

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null

  return (
    <div key={index} 
    onClick={() => openModal(item.images)}
    className="cursor-pointer fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-2xl max-w-3xl w-full relative"
      >

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">
          Galería del servicio
        </h2>

        {/* Imágenes */}
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="servicio"
              className="rounded-lg object-cover h-40 w-full"
            />
          ))}
        </div>

      </motion.div>

    </div>
  )
}

export default Modal