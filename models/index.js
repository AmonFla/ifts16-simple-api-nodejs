const Categoria = require('./categoria')
const Post = require('./post')

//Representación de una relación 1N donde un post puede tener una categoría y una categoría muchos post
Post.belongsTo(Categoria)
Categoria.hasMany(Post)

/*
//Representación de una relación NN donde un post puede tener varias categorías
  Post.belongsTo(Categoria, {through: 'post_categoria'})
  Categoria.belongsTo(Post, {through: 'post_categoria'})
*/

module.exports = {
  Post,
  Categoria
}

