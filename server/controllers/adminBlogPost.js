import mongoose from 'mongoose'
import Blog from './../models/blogPost'

const adminPost = {}

adminPost.get = (req, res) => {
  Blog.findById(req.params.id, (err, blogs) => {
    if (err) {
      throw err
    } else {
      res.render('admin_blog_post', {
        blogs: blogs
      })
    }
  })
}

export default adminPost
