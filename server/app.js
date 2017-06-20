import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import util from 'util'
import exphbs from 'express-handlebars'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import flash from 'express-flash-2'

mongoose.connect('mongodb://localhost:27017/templatedb', () => {
  console.log('conectado a mongo!');
})

const app = express()

app.set('views', __dirname + './../views')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(logger('dev'))

app.use(cookieParser('keyboard cat'))

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized:true
}))

app.use(flash());

app.get('/flash', (req, res) => {
  res.flash('info', 'no se que chucha!')
  res.redirect('/')
})

app.get('/no-flash', (req, res) => {
  res.redirect('/')
})

app.get('/otro', (req, res) => {
  res.flash('info', 'soy otro flash')
  res.redirect('/')
})

app.use('/', routes)

export default app
