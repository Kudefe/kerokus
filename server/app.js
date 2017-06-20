import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

mongoose.connect('mongodb://localhost:27017/templatedb', () => {
  console.log('conectado a mongo!');
})

const app = express()

app.use('/', routes)

export default app
