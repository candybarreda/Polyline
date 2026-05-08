import { useState } from "react";
import PropertyCard from "./PropertyCard";
import Modal from "./Modal";

const Properties = () => {

  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  const data = [
    {
      image: "/images/excavacion.jpg",
      title: "Excavaciones & Demoliciones",
      location: "Lima",
      images: [
        "/images/excavacion.jpg",
        "/images/excavacion1.jpg",
        "/images/excavacion2.jpg",
        "/images/excavacion3.jpg",
        "/images/excavacion4.jpg",
        "/images/excavacion5.jpg",
        "/images/excavacion6.jpg",
      ],
    },
    {
      image: "/images/anclajes1.jpg",
      title: "Anclajes Postensados",
      location: "Lima",
      images: [
        "/images/anclajes1.jpg",
        "/images/anclajes2.jpg",
        "/images/anclajes3.jpg",
        "/images/anclajes4.jpg",
        "/images/anclajes5.jpg",
        "/images/anclajes6.jpg",
      ],
    },
    {
      image: "/images/encofrado1.jpg",
      title: "Encofrados",
      location: "Lima",
      images: [
        "/images/encofrado1.jpg",
        "/images/encofrado2.jpg",
        "/images/encofrado3.jpg",
        "/images/encofrado4.jpg",
        "/images/encofrado5.jpg",
        "/images/encofrado6.jpg",
      ],
    },
    {
      image: "/images/estructuras1.jpg",
      title: "Estructuras",
      location: "Lima",
      images: [
       
        "/images/estructuras1.jpg",
        "/images/estructuras2.jpg",
        "/images/estructuras3.jpg",
        "/images/estructuras4.jpg",
        "/images/estructuras5.jpg",
        "/images/estructuras6.jpg",
      ],
    },
    {
      image: "/images/acabados.jpg",
      title: "Acabados",
      location: "Lima",
      images: [
        "/images/acabados.jpg",
        "/images/acabados1.jpg",
        "/images/acabados2.jpg",
        "/images/acabados3.jpg",
        "/images/acabados4.jpg",
        "/images/acabados5.jpg",
        "/images/acabados6.jpg",
      ],
    },
    
  ];

  const openModal = (images, title) => {
    setSelectedImages(images);
    setSelectedTitle(title);
    setOpen(true);
  };

  return (
    <section
      id="proyectos"
      className="
      relative
      py-24
      px-6
      md:px-10
      overflow-hidden
      bg-gradient-to-b
      from-[#1F2937]
      via-[#123458]
      to-[#1F2937]
      "
    >

      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A90A4]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        
        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-[#4A90A4] font-semibold">
            
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-white
            mt-4
            mb-6
            "
          >
            Nuestros <span className="text-[#F97316]">proyectos</span>
          </h2>

          <p
            className="
            text-gray-300
            max-w-3xl
            mx-auto
            text-lg
            leading-relaxed
            "
          >
            Desarrollamos proyectos de construcción, infraestructura
            y movimiento de tierra con altos estándares de calidad,
            innovación y seguridad.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(item.images, item.title)}
            >

              <PropertyCard
                {...item}
                onClick={() => openModal(item.images, item.title)}
              />

            </div>
          ))}

        </div>

      </div>

      {/* Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        images={selectedImages}
        title={selectedTitle}
      />

    </section>
  );
};

export default Properties;