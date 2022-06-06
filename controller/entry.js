const { v4: uuidv4 } = require("uuid");

const router = require("express").Router();
let { Entry } = require("../dataccess/entry");

/* Obtener todo */
router.get("/", (req, res) => {
  res.status(200).json(Entry);
});

/* Obtener uno especifico */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = Entry.find((registro) => registro.id == id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.sendStatus(404);
  }
});

/* Agregar un elemento */
router.post("/", (req, res) => {
  const body = { ...req.body, id: uuidv4() };
  Entry.push(body);
  res.status(200).json(body);
});

/* Borrar un elemento */
/*router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Entry = Entry.filter((registro) => registro.id != id);
  res.sendStatus(201);
});*/

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = Entry.findIndex((registro) => registro.id == id);

  if (index >= 0) {
    Entry.splice(index, 1);
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

/* Modificar un elemento */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const index = Entry.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Entry[index] = req.body;
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
