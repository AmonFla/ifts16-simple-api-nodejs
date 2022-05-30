const router = require("express").Router();

/* Obtener todo */
router.get("/", (req, res) => {
  res.status(200).json({ message: "estoy vivo por el get" });
});

/* Obtener uno especifico */
router.get("/:id", (req, res) => {
  res.status(200).json({ message: "estoy vivo por el get" });
});

/* Agregar un elemento */
router.post("/", (req, res) => {
  res.status(200).json({ message: "estoy vivo por el psot" });
});

/* Borrar un elemento */
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "estoy vivo por el delete" });
});

/* Modificar un elemento */
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "estoy vivo por el put" });
});

module.exports = router;
