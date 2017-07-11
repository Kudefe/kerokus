import mongoose from 'mongoose'
import Game from './../models/entrevista'
import Admin from './../models/admin'

const adminInterviews = {}

adminInterviews.get = (req, res) => {
  console.log("pagina de admin");
  Admin.find({}, (err, admin) => {
    if (err) {
      console.error(err);
    } else {
      return admin
    }
  }).then((admin) => {
    Game.find({}, (err, games) => {
      if (err) {
        console.log(err);
      } else {
        res.render('admin_interviews', {
          title: 'Add Game',
          games: games,
          admin: admin[0]._id
        })
      }
    })
  })
}


export default adminInterviews
