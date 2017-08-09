'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogPost = require('./../models/blogPost');

var _blogPost2 = _interopRequireDefault(_blogPost);

var _slugify = require('./slugify/slugify');

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blogPost = {};

blogPost.get = function (req, res) {
  res.render('add_blog');
};

//TODO: añadir el post al server del blog post

blogPost.post = function (req, res) {
  req.checkBody('title', 'Requerido!').notEmpty();
  req.checkBody('body', 'Requerido!').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    res.flash('error', 'no wn, de nuevo');
    res.render('add_blog', {
      errors: errors
    });
  } else {
    res.flash('success', 'Blog añadido!');

    var blog = new _blogPost2.default();

    blog.title = req.body.title;
    blog.body = req.body.body;
    blog.title2 = (0, _slugify2.default)(blog.title);

    console.log(blog.title2);

    blog.save(function (err) {
      if (err) {
        throw err;
      } else {
        res.redirect('/blog');
      }
    });
  }
};

exports.default = blogPost;
//# sourceMappingURL=blogPost.js.map