import PropertyCard from "./PropertyCard"

const Properties = () => {
  const data = [
    {
      image: "/images/excabadora.jpg",
      title: "Maquinaria",
      price: "$0",
      location: "Lima",
    },
    {
      image: "/images/anclajes.jpg",
      title: "Anclajes",
      price: "$0",
      location: "Lima",
    },
    {
      image: "/images/zorritos.jpg",
      title: "zorritos",
      price: "$0",
      location: "Piura",
    },
  ]

  return (
    <section id="proyectos" className="py-20 px-10 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-12">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <PropertyCard key={index} {...item} />
        ))}
      </div>

    </section>
  )
}

export default Properties