import mongoose from 'mongoose'
import Game from './../models/entrevista'

const gamePage = {}

gamePage.get = (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.render('games', {
        title: 'Add Game',
        games: games
      })
      console.log(games);
    }
  })
}

export default gamePage
