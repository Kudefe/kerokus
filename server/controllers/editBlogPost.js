import mongoose from 'mongoose'
import Blog from './../models/blogPost'

const editPost = {}

editPost.get = (req, res) => {
  Blog.findById(req.params.id, (err, blogs) => {
    res.render('edit_post', {
      blogs: blogs
    })
  })
}

editPost.post = (req, res) => {
  let post = {}

  post.title = req.body.title
  post.body = req.body.body

  let query = {_id:req.params.id}

  Blog.update(query, post, (err) => {
    if (err) {
      throw err
    } else {
      res.flash("success", "Modificado")
      res.redirect('/admin')
    }
  })
}

editPost.delete = (req, res) => {
  let query = {_id:req.params.id}

  Blog.remove(query, (err) => {
    if (err) {
      throw err
    } else {
      res.send('Success')
    }
  })
}


export default editPost
