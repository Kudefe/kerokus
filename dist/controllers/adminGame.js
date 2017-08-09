'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _entrevista = require('./../models/entrevista');

var _entrevista2 = _interopRequireDefault(_entrevista);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminGame = {};

adminGame.get = function (req, res) {
  _entrevista2.default.findById(req.params.id, function (err, games) {
    if (err) {
      console.error(err);
    } else {
      res.render('admin_game', {
        games: games
      });
    }
  });
};

exports.default = adminGame;
//# sourceMappingURL=adminGame.js.map