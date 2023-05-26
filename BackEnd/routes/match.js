const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // tu lógica de manejo de la ruta aquí
  res.send("Hola match");
});

module.exports = router;
