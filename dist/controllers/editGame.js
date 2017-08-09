'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _entrevista = require('./../models/entrevista');

var _entrevista2 = _interopRequireDefault(_entrevista);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editGame = {};

editGame.get = function (req, res) {
  _entrevista2.default.findById(req.params.id, function (err, games) {
    res.render('edit_game', {
      games: games
    });
  });
};

editGame.post = function (req, res) {
  var game = {};

  game.title = req.body.title;
  game.author = req.body.author;
  game.body = req.body.body;

  var query = { _id: req.params.id };

  _entrevista2.default.update(query, game, function (err) {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/admin');
    }
  });
};

editGame.delete = function (req, res) {
  var query = { _id: req.params.id };

  _entrevista2.default.remove(query, function (err) {
    if (err) {
      console.error(err);
    } else {
      res.send('Success');
    }
  });
};

exports.default = editGame;
//# sourceMappingURL=editGame.js.map