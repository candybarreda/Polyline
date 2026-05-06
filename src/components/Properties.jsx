import { useState } from "react"
import PropertyCard from "./PropertyCard"
import Modal from "./Modal"




const Properties = () => {
  const [open, setOpen] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])
  const [selectedTitle, setSelectedTitle] = useState("")
  
  const data = [
    {
      image: "/images/excabadora.jpg",
      title: "Maquinaria",
      location: "Lima",
      images: [
        "/images/excabadora.jpg",
        "/images/excabadora.jpg",
        "/images/excabadora.jpg",
      ],
    },
    {
      image: "/images/anclajes.jpg",
      title: "Anclajes",
      location: "Lima",
      images: [
        "/images/anclajes.jpg",
        "/images/anclajes.jpg",
      ],
    },
    {
      image: "/images/zorritos.jpg",
      title: "Zorritos",
      location: "Piura",
      images: [
        "/images/zorritos.jpg",
        "/images/zorritos.jpg",
      ],
    },
  ]

  const openModal = (images, title) => {
    setSelectedImages(images)
    setSelectedTitle(title)
    setOpen(true)
  }
  return (
    <section id="proyectos" className="py-20 px-10 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-12">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div 
          key={index} 
          onClick={() => openModal(item.images, item.title)}>
            <PropertyCard  
            key={index}
            {...item}
            onClick={() => openModal(item.images, item.title)} />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      images={selectedImages}
      title={selectedTitle}
      />

    </section>
  )
}

export default Properties