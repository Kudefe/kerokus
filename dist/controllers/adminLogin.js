'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _admin = require('./../models/admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminLogin = {};

adminLogin.get = function (req, res) {
  res.render('admin_login');
};

adminLogin.post = function (req, res, next) {
  _passport2.default.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login'
    // failureFlash: true
  })(req, res, next);
};

exports.default = adminLogin;
//# sourceMappingURL=adminLogin.js.map