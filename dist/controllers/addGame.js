'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _entrevista = require('./../models/entrevista');

var _entrevista2 = _interopRequireDefault(_entrevista);

var _slugify = require('./slugify/slugify');

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addGame = {};

addGame.get = function (req, res) {
  res.render('addGame');
};

addGame.post = function (req, res) {
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('body', 'Body is required').notEmpty();
  req.checkBody('units', 'Units is required').notEmpty();
  req.checkBody('companyName', 'Company Name is required').notEmpty();
  req.checkBody('published', 'Published is required').notEmpty();
  // req.checkBody('imageOne', 'Image One is required').notEmpty()
  // req.checkBody('imageTwo', 'Image Two is required').notEmpty()

  //get errors
  var errors = req.validationErrors();

  if (errors) {
    res.flash('error', 'Credenciales malas');
    res.render('addGame', {
      errors: errors
    });
  } else {
    res.flash('success', "juego añadido!");
    var game = new _entrevista2.default();
    game.title = req.body.title;
    game.title2 = (0, _slugify2.default)(game.title);
    game.author = req.body.author;
    game.body = req.body.body;
    game.units = req.body.units;
    game.companyName = req.body.companyName;
    game.published = req.body.published;
    game.imageOne = req.body.imageOne;
    game.imageTwo = req.body.imageTwo;

    game.save(function (err) {
      if (err) {
        console.error(err);
      } else {
        res.redirect('/admin/add/game');
      }
    });
  }
};

exports.default = addGame;
//# sourceMappingURL=addGame.js.map