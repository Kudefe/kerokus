import mongoose from 'mongoose'

const { Schema } = mongoose

const entrevistaSchema = new Schema({
  gameName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  platforms: {
    type: String,
    required: true
  },
  published: {
    type: Date,
    required: true,
    default: Date.now
  },
  Others: {
    type: String,
    required: false
  }
})

const Interview = mongoose.model('Interview', entrevistaSchema)
export default Interview
