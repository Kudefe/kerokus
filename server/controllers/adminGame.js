import mongoose from 'mongoose'
import Game from './../models/entrevista'

const adminGame = {}

adminGame.get = (req, res) => {
  Game.findById(req.params.id, (err, games) => {
    if (err) {
      console.error(err);
    } else {
      res.render('admin_game', {
        games:games
      })
    }
  })
}

export default adminGame
