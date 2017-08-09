'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogPost = require('./../models/blogPost');

var _blogPost2 = _interopRequireDefault(_blogPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editPost = {};

editPost.get = function (req, res) {
  _blogPost2.default.findById(req.params.id, function (err, blogs) {
    res.render('edit_post', {
      blogs: blogs
    });
  });
};

editPost.post = function (req, res) {
  var post = {};

  post.title = req.body.title;
  post.body = req.body.body;

  var query = { _id: req.params.id };

  _blogPost2.default.update(query, post, function (err) {
    if (err) {
      throw err;
    } else {
      res.flash("success", "Modificado");
      res.redirect('/admin');
    }
  });
};

editPost.delete = function (req, res) {
  var query = { _id: req.params.id };

  _blogPost2.default.remove(query, function (err) {
    if (err) {
      throw err;
    } else {
      res.send('Success');
    }
  });
};

exports.default = editPost;
//# sourceMappingURL=editBlogPost.js.map