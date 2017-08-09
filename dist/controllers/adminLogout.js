'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _admin = require('./../models/admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminLogout = {};

adminLogout.get = function (req, res) {
  console.log("deslogueando!!");
  req.logout();
  res.flash('success', 'Deslogueado!');
  res.redirect('/admin');
};

exports.default = adminLogout;
//# sourceMappingURL=adminLogout.js.map