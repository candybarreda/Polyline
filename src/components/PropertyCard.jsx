const PropertyCard = ({ image, title, location, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
      group
      relative
      cursor-pointer
      rounded-3xl
      overflow-hidden
      bg-[#1F2937]
      border
      border-white/10
      shadow-xl
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-3
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        -inset-[1px]
        bg-gradient-to-r
        from-[#123458]
        via-[#4A90A4]
        to-[#F97316]
        opacity-0
        group-hover:opacity-100
        blur-xl
        transition
        duration-500
        "
      ></div>

      {/* Contenido real */}
      <div className="relative bg-[#1F2937] rounded-3xl overflow-hidden">

        {/* Imagen */}
        <div className="relative overflow-hidden">

          <img
            src={image}
            alt="property"
            className="
            w-full
            h-72
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#123458]/90
            via-[#123458]/20
            to-transparent
            "
          ></div>

          

          {/* Texto flotante */}
          <div className="absolute bottom-5 left-5">

            <h3
              className="
              text-2xl
              font-extrabold
              text-white
              mb-2
              group-hover:text-[#4A90A4]
              transition
              "
            >
              {title}
            </h3>

            <p className="text-gray-200 text-sm flex items-center gap-2">
              
            </p>

          </div>

        </div>

        {/* Footer Card */}
        <div
          className="
          px-6
          py-5
          bg-gradient-to-r
          from-[#123458]
          to-[#1F2937]
          "
        >

          <div className="flex items-center justify-between">

            {/* Línea */}
            <div
              className="
              w-16
              h-1
              rounded-full
              bg-[#4A90A4]
              group-hover:w-28
              transition-all
              duration-500
              "
            ></div>

            {/* CTA */}
            <span
              className="
              text-[#F97316]
              font-semibold
              text-sm
              tracking-wide
              uppercase
              "
            >
              Ver Mas
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PropertyCard;