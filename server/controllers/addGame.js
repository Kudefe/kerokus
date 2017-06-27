import mongoose from 'mongoose'
import Game from './../models/entrevista'

const addGame = {}

addGame.get = (req, res) => {
  res.render('addGame')
}

addGame.post = (req, res) => {
  req.checkBody('title', 'Title is required').notEmpty()
  req.checkBody('author', 'Author is required').notEmpty()
  req.checkBody('body', 'Body is required').notEmpty()

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
    game.author = req.body.author
    game.body = req.body.body

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
