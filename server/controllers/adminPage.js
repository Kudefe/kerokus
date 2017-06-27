import mongoose from 'mongoose'
import Game from './../models/entrevista'

const adminPage = {}

adminPage.get = (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.render('admin', {
        title: 'Add Game',
        games: games
      })
    }
  })
}


export default adminPage
