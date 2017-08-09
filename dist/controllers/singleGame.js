'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _entrevista = require('./../models/entrevista');

var _entrevista2 = _interopRequireDefault(_entrevista);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var singleGame = {};

singleGame.get = function (req, res) {
  _entrevista2.default.findOne({ title2: req.params.title2 }, function (err, games) {
    if (err) {
      throw err;
    } else {
      res.render('single_game', {
        games: games
      });
    }
  });
};

exports.default = singleGame;
//# sourceMappingURL=singleGame.js.map