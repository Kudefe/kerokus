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
import expressValidator from 'express-validator'
import config from './../config/database'
import passport from 'passport'

mongoose.connect(config.database)
let db = mongoose.connection

//check connection
db.once('open', ()  => {
  console.log('conectado a mongoDB');
})

//check for db errors
db.on('error', (err) => {
  console.log(err);
})

const app = express()

app.set('views', __dirname + './../views')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//set public folder
app.use(express.static(path.join(__dirname, './../public')))

app.use(logger('dev'))

app.use(cookieParser('keyboard cat'))

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized:true
}))

app.use(flash());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

require('./../config/passport')(passport)
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/flash', (req, res) => {
  res.flash('info', 'no se que chucha!')
  res.redirect('/games')
})

app.get('/no-flash', (req, res) => {
  res.redirect('/games')
})

app.get('/otro', (req, res) => {
  res.flash('info', 'soy otro flash')
  res.redirect('/games')
})

app.use('/', routes)

export default app
