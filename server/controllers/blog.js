//TODO: Falta añadir el modelo de Blog Post
/*
  Crear un route para blog posts,
  añadir un post method para mandar al server mis weas
  añadir una view para extra posts
*/
import mongoose from 'mongoose'
import Blog from './../models/blogPost'

const blog = {}

blog.get = (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      throw err
    } else {
      res.render('blog', {
        blogs: blogs
      })
    }
  })
}



export default blog
