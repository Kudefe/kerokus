import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

//en produccion, debo pedir todos los datos requeridos
const interviewSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  units: {type: Number, required: false},
  companyName: { type: String, required: false },
  published: { type: Date , required: false}
})

const Game = mongoose.model('Game', interviewSchema)

export default Game
