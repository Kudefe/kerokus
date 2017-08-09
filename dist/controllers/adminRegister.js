'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _admin = require('./../models/admin');

var _admin2 = _interopRequireDefault(_admin);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminRegister = {};

adminRegister.get = function (req, res) {
  //TODO: if ya hay admin, res.render /login/
  _admin2.default.find({}, function (err, admin) {
    if (admin.length <= 0) {
      res.render('admin_register');
    } else {
      res.flash('error', 'Ya existe Admin');
      res.redirect('/admin/login');
    }
  });
};

adminRegister.post = function (req, res) {
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'email is not valid').isEmail();
  req.checkBody('password', 'password is required').notEmpty();
  req.checkBody('password2', 'password do not match').equals(req.body.password);

  var error = req.validationErrors();

  if (error) {
    console.log(error);
    res.flash('errors', 'Errores en los campos');
    res.render('admin_register', {
      error: error
    });
  } else {
    var newAdmin = new _admin2.default({
      name: name,
      username: username,
      email: email,
      password: password
    });

    _bcryptjs2.default.genSalt(10, function (err, salt) {
      _bcryptjs2.default.hash(newAdmin.password, salt, function (err, hash) {
        if (err) {
          console.error(err);
        } else {
          newAdmin.password = hash;
          newAdmin.save(function (err) {
            if (err) {
              console.error(err);
            } else {
              res.flash('success', "Admin creado");
              res.redirect('/admin/');
            }
          });
        }
      });
    });
  }
};

exports.default = adminRegister;
//# sourceMappingURL=adminRegister.js.map