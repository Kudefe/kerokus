'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _entrevista = require('./../models/entrevista');

var _entrevista2 = _interopRequireDefault(_entrevista);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gamePage = {};

gamePage.get = function (req, res) {
  _entrevista2.default.find({}, function (err, games) {
    if (err) {
      console.log(err);
    } else {

      var inverted = games.reverse();

      res.render('games', {
        title: 'interviews',
        games: inverted
      });
    }
  });
};

exports.default = gamePage;
//# sourceMappingURL=gamesPage.js.map