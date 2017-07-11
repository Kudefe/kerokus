import mongoose from 'mongoose'
import Blog from './../models/blogPost'

const singlePost = {}

singlePost.get = (req, res) => {
  Blog.findById(req.params.id, (err, blogs) => {
    if (err) {
      throw err
    } else {
      res.render('single_post', {
        blogs: blogs
      })
    }
  })
}

export default singlePost
