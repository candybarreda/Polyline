import { FaWhatsapp } from "react-icons/fa"

const WhatsappButton = () => {
  const phone = "51999999999"
  const message = "Hola, estoy interesado en un proyecto"

  const url = `https://api.whatsapp.com/send?phone=51943812536`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition text-2xl"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton