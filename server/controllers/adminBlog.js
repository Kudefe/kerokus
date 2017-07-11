import mongoose from 'mongoose'
import Blog from './../models/blogPost'

const adminBlog = {}

adminBlog.get = (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      throw err
    } else {
      res.render('admin_blogs', {
        blogs: blogs
      })
    }
  })
}

export default adminBlog
