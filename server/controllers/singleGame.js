import mongoose from 'mongoose'
import Game from './../models/entrevista'

const singleGame = {}

singleGame.get = (req, res) => {
  Game.findById(req.params.id, (err, games) => {
    if (err) {
      console.error(err);
    } else {
      res.render('singleGame', {
        games:games
      })
    }
  })
}

export default singleGame


  // Game.find({title2: req.params.title2}, (err, games) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     res.render('singleGame', {
  //       games:games
  //     })
  //   }
  // })
