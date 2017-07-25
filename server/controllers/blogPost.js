import mongoose from 'mongoose'
import Blog from './../models/blogPost'
import slugify from './slugify/slugify'

const blogPost = {}

blogPost.get = (req, res) => {
  res.render('add_blog')
}

//TODO: añadir el post al server del blog post

blogPost.post = (req, res) => {
  req.checkBody('title', 'Requerido!').notEmpty()
  req.checkBody('body', 'Requerido!').notEmpty()

  let errors = req.validationErrors()

  if (errors) {
    res.flash('error', 'no wn, de nuevo')
    res.render('add_blog', {
      errors: errors
    })
  } else {
    res.flash('success', 'Blog añadido!')

    let blog = new Blog()

    blog.title = req.body.title
    blog.body = req.body.body
    blog.title2 = slugify(blog.title);

    console.log(blog.title2);

    blog.save((err) => {
      if (err) {
        throw err
      } else {
        res.redirect('/blog')
      }
    })
  }
}

export default blogPost
