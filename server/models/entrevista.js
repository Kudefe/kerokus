import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

//en produccion, debo pedir todos los datos requeridos
const interviewSchema = new Schema({

  title: {
     type: String, required: true
    },
  title2: {
     type: String, required: true
   },
  author: {
     type: String, required: true
    },
  body: {
    type: String, required: true
   },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now
   },
  units: {
    type: String,
    required: false,
    default: "N/A"
   },
  companyName: {
     type: String, required: false
    },
  published: {
    type: String , required: true
    },
  imageOne: {
    type: String,
    required: false,
    default: "http://lorempixel.com/800/600/"
    },
  imageTwo: {
    type: String,
    required: false,
    default: "http://lorempixel.com/1080/1080/"
    }
})

const Game = mongoose.model('Game', interviewSchema)

export default Game
