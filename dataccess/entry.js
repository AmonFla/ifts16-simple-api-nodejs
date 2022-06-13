let Entry = [
  {
    id: 1,
    title: "primer post",
    content: "mucho bla bla bla",
  },
  {
    id: 2,
    title: "primer post",
    content: "mucho bla bla bla",
  },
];

const getAll = () => { return Entry };

const getOne = (id) => { return Entry.find((registro) => registro.id == id);}

const save = (body) => { Entry.push(body);}

const borrar = (id) => {
  const index = Entry.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Entry.splice(index, 1);
    return true
  }
  return false
}

const update = (id) => { 
  const index = Entry.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Entry[index] = req.body;
    return true
  } 
  return false
}

module.exports = { getAll, getOne, save, borrar, update};
