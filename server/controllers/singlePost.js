import mongoose from 'mongoose'
import Blog from './../models/blogPost'

const singlePost = {}

singlePost.get = (req, res) => {

  Blog.findOne({title2: req.params.title2}, (err, blogs) => {
    if (err) {
      throw err
    } else {
      console.log(blogs);
      res.render('single_post', {
        blogs:blogs
      })
    }
  })
}

export default singlePost
