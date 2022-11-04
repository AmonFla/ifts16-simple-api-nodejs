const { Categoria } = require('../models/')
   


const getAll = async (filter) => { 
  const datos = await Categoria.findAll() 
  return datos
};

const getOne = async (id) => { return await Categoria.findByPk(id);}


const save = async (body) => {
  const data = { ...body}
  const post = await Categoria.create(data); 
  return post
}

const borrar = async (id) => {
  await Categoria.destroy({
    where: {
      id
    }
  }) 
}

const update = async (id, body) => { 
  const data = await getOne(id)
  data.nombre = body.nombre 
  await data.save()
  return data
}

module.exports = { getAll, getOne, save, borrar, update};
