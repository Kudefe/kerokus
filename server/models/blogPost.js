import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Blog = mongoose.model('Blog', blogPostSchema)

export default Blog
