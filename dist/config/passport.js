'use strict';

var _admin = require('./../models/admin');

var _admin2 = _interopRequireDefault(_admin);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {
  //TODO añadir email en login strategy. Remover username.
  // Local Strategy
  passport.use(new LocalStrategy(function (username, password, done) {
    // Match Username
    var query = { username: username };
    _admin2.default.findOne(query, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'No user found' });
      }

      // Match Password
      _bcryptjs2.default.compare(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    });
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    _admin2.default.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
//# sourceMappingURL=passport.js.map