import mongoose from 'mongoose'
import Game from './../models/entrevista'

const gamePage = {}

gamePage.get = (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      
      let inverted = games.reverse()

      res.render('games', {
      title: 'interviews',
      games: inverted
    })
    }
  })
}

export default gamePage
