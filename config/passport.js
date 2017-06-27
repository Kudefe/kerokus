const localStrategy = require('passport-local').Strategy
import Admin from './../server/models/admin'
import config from './database'
import bcrypt from 'bcryptjs'

module.exports = function(passport) {
  //local Strategy
  passport.use(new localStrategy((username, password, done) => {
    //match username
    let query = {username:username}
    Admin.findOne(query, (err, user) => {
      if(err) throw err
      if(!user){
        return done(null, false, {message: 'No user Found!'})
      }

      //match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) throw err
        if(isMatch){
          return done(null, user)
        }else {
          return done(null, false, {message: 'Password equivocado'})
        }
      })
    })
  }))

  passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Admin.findById(id, function(err, user) {
    done(err, user);
  });
});

}
