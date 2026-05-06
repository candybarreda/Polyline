const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "constructora"
});

db.connect(err => {
  if (err) {
    console.log("Error conexión:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

// endpoint para guardar datos
app.post("/contacto", (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  const sql = "INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [nombre, email, telefono, mensaje], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al guardar");
    } else {
      res.send("Datos guardados");
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});