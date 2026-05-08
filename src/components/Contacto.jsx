import { useState } from "react";
import { db } from "../firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Contacto = () => {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Manejar cambios
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log("SUBMIT FUNCIONA");
    setSuccess("");
    setErrorMsg("");

    // Validación simple
    if (
      !form.nombre ||
      !form.email ||
      !form.mensaje
    ) {
      setErrorMsg("Completa los campos obligatorios");
      return;
    }

    try {

      setLoading(true);

      console.log("Enviando datos:", form);

      // Guardar en Firebase
      console.log("DB:", db);
      const docRef = await addDoc(
        collection(db, "contactos"),
        {
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
          createdAt: serverTimestamp(),
        }
      );

      console.log("Documento guardado:", docRef.id);

      // Mensaje éxito
      setSuccess("Consulta enviada correctamente");

      
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

    } catch (error) {

      console.error("ERROR FIREBASE:", error);

      setErrorMsg(
        "Ocurrió un error al enviar la consulta"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu Nombre *"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/90
                text-[#1F2937]
                outline-none
                "
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Tu Email *"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/90
                text-[#1F2937]
                outline-none
                "
              />

              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Tu Teléfono"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/90
                text-[#1F2937]
                outline-none
                "
              />

              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Tu Mensaje *"
                rows="5"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/90
                text-[#1F2937]
                outline-none
                "
              ></textarea>

              {/* Mensaje éxito */}
              {success && (
                <div
                  className="
                  bg-green-500/20
                  border
                  border-green-400
                  text-green-200
                  p-4
                  rounded-xl
                  "
                >
                  {success}
                </div>
              )}

              {/* Mensaje error */}
              {errorMsg && (
                <div
                  className="
                  bg-red-500/20
                  border
                  border-red-400
                  text-red-200
                  p-4
                  rounded-xl
                  "
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-[#F97316]
                hover:bg-orange-600
                disabled:opacity-50
                text-white
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:scale-[1.02]
                "
              >
                {loading
                  ? "Enviando..."
                  : "Enviar Consulta"}
              </button>

            </form>

          
  );
};

export default Contacto;