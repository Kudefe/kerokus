import mongoose from 'mongoose'
import Game from './../models/entrevista'

const singleGame = {}

singleGame.get = (req, res) => {
  Game.findOne({title2: req.params.title2}, (err, games) => {
    if (err) {
      throw err
    } else {
      res.render('single_game', {
        games:games
      })
    }
  })
}

export default singleGame;
