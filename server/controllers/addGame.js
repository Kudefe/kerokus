import mongoose from 'mongoose'
import Game from './../models/entrevista'
import slugify from './slugify/slugify'

const addGame = {}

addGame.get = (req, res) => {
  res.render('addGame')
}

addGame.post = (req, res) => {
  req.checkBody('title', 'Title is required').notEmpty()
  req.checkBody('author', 'Author is required').notEmpty()
  req.checkBody('body', 'Body is required').notEmpty()
  req.checkBody('units', 'Units is required').notEmpty()
  req.checkBody('companyName', 'Company Name is required').notEmpty()
  req.checkBody('published', 'Published is required').notEmpty()
  // req.checkBody('imageOne', 'Image One is required').notEmpty()
  // req.checkBody('imageTwo', 'Image Two is required').notEmpty()

  //get errors
  let errors = req.validationErrors()

  if (errors) {
    res.flash('error', 'Credenciales malas')
    res.render('addGame', {
      errors: errors
    })
  } else {
    res.flash('success', "juego añadido!")
    let game = new Game()
    game.title = req.body.title
    game.title2 = slugify(game.title)
    game.author = req.body.author
    game.body = req.body.body
    game.units = req.body.units
    game.companyName = req.body.companyName
    game.published = req.body.published
    game.imageOne = req.body.imageOne
    game.imageTwo = req.body.imageTwo

    game.save((err) => {
      if (err) {
        console.error(err);
      } else {
        res.redirect('/admin/add/game')
      }
    })
  }
}

export default addGame
