const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="
      py-24
      px-6
      md:px-10
      bg-gradient-to-br
      from-[#123458]
      via-[#1F2937]
      to-[#123458]
      relative
      overflow-hidden
      "
    >

      {/* Glow decorativo */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4A90A4]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Texto */}
        <div>

          {/* Subtitle */}
          <span className="uppercase tracking-[4px] text-[#4A90A4] font-semibold">
            Nosotros
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-white leading-tight">
            Construimos <span className="text-[#F97316]">calidad</span> y confianza
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Polyline SAC es una empresa constructora que inició actividades en marzo del 2002.
            Con más de 21 años de experiencia, desarrollamos proyectos de construcción,
            infraestructura y remodelación brindando seguridad, innovación y confianza
            a cada cliente.
          </p>

          {/* Features */}
          <div className="space-y-5">

            {/* Card 1 */}
            <div
              className="
              flex items-start gap-4
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              p-5
              rounded-2xl
              shadow-lg
              hover:bg-white/15
              transition
              duration-300
              "
            >

              <div className="bg-[#123458] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md">
                ✓
              </div>

              <div>
                <h4 className="font-bold text-white text-lg">
                  Habilitaciones Urbanas
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  Desarrollo de proyectos urbanos modernos y funcionales.
                </p>
              </div>

            </div>

            {/* Card 2 */}
            <div
              className="
              flex items-start gap-4
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              p-5
              rounded-2xl
              shadow-lg
              hover:bg-white/15
              transition
              duration-300
              "
            >

              <div className="bg-[#4A90A4] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md">
                ✓
              </div>

              <div>
                <h4 className="font-bold text-white text-lg">
                  Demoliciones Especializadas
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  Demolición segura de edificaciones de hasta 3,500 m² techados.
                </p>
              </div>

            </div>

            {/* Card 3 */}
            <div
              className="
              flex items-start gap-4
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              p-5
              rounded-2xl
              shadow-lg
              hover:bg-white/15
              transition
              duration-300
              "
            >

              <div className="bg-[#F97316] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md">
                ✓
              </div>

              <div>
                <h4 className="font-bold text-white text-lg">
                  Remodelaciones Modernas
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  Transformamos espacios con acabados modernos y eficientes.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Video */}
        <div className="relative group">

          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#123458] via-[#4A90A4] to-[#F97316] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
            relative
            rounded-3xl
            shadow-2xl
            w-full
            h-[550px]
            object-cover
            transition
            duration-500
            group-hover:scale-[1.02]
            "
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          {/* Badge */}
          <div
            className="
            absolute
            bottom-6
            left-6
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            px-6
            py-4
            rounded-2xl
            text-white
            shadow-2xl
            "
          >

            <p className="text-3xl font-extrabold">
              +21
            </p>

            <span className="text-sm tracking-wide text-gray-200 uppercase">
              Años de experiencia
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Nosotros;