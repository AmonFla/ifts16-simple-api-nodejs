const { Post, Categoria } = require('../models/')
   


const getAll = async (filter) => { 
  const datos = await Post.findAll({
    include: [
      {model: Categoria, required: false}
  ]
}) 
  return datos
};

const getOne = async (id) => {
  return await Post.findByPk(id, {
    include: [
      {model: Categoria, required: false}
  ]
});}


const save = async (body) => {
  const data = { ...body}
  const post = await Post.create(data);
  if (body.categoria) { 
    let categoria = {}
    if (body.categoria.id) {
      categoria = await Categoria.findByPk(body.categoria.id)
    } else { 
      categoria = await Categoria.create(body.categoria)
    }
    post.categoriaId = categoria.id
    await post.save()
  }
  return post
}

const borrar = async (id) => {
  await Post.destroy({
    where: {
      id
    }
  }) 
}

const update = async (id, body) => { 
  const data = await getOne(id)
  data.title = body.title
  data.content = body.content
  if (body.categoria) { 
    let categoria = {}
    if (body.categoria.id) {
      categoria = await Categoria.findByPk(body.categoria.id)
    } else { 
      categoria = await Categoria.create(body.categoria)
    }
    data.categoriaId = categoria.id 
  }
  await data.save()
  return data
}

module.exports = { getAll, getOne, save, borrar, update};
