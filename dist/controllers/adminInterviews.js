'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _entrevista = require('./../models/entrevista');

var _entrevista2 = _interopRequireDefault(_entrevista);

var _admin = require('./../models/admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminInterviews = {};

adminInterviews.get = function (req, res) {
  console.log("pagina de admin");
  _admin2.default.find({}, function (err, admin) {
    if (err) {
      console.error(err);
    } else {
      return admin;
    }
  }).then(function (admin) {
    _entrevista2.default.find({}, function (err, games) {
      if (err) {
        console.log(err);
      } else {
        res.render('admin_interviews', {
          title: 'Add Game',
          games: games,
          admin: admin[0]._id
        });
      }
    });
  });
};

exports.default = adminInterviews;
//# sourceMappingURL=adminInterviews.js.map