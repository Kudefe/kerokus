import mongoose from 'mongoose'
import Game from './../models/entrevista'

const addGame = {}

addGame.get = (req, res) => {
  res.render('addGame')
}

addGame.post = (req, res) => {
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

export default addGame
