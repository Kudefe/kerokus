import mongoose from 'mongoose'
import Game from './../models/entrevista'

const editGame = {}

editGame.get = (req, res) => {
  Game.findById(req.params.id, (err, games) => {
    res.render('edit_game', {
      games: games
    })
  })
}

editGame.post = (req, res) => {
  let game = {}

  game.title = req.body.title
  game.author = req.body.author
  game.body = req.body.body

  let query = {_id:req.params.id}

  Game.update(query, game, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/admin')
    }
  })
}

editGame.delete = (req, res) => {
  let query = {_id:req.params.id}

  Game.remove(query, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.send('Success')
    }
  })
}


export default editGame
