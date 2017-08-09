'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogPost = require('./../models/blogPost');

var _blogPost2 = _interopRequireDefault(_blogPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var singlePost = {};

singlePost.get = function (req, res) {

  _blogPost2.default.findOne({ title2: req.params.title2 }, function (err, blogs) {
    if (err) {
      throw err;
    } else {
      console.log(blogs);
      res.render('single_post', {
        blogs: blogs
      });
    }
  });
};

exports.default = singlePost;
//# sourceMappingURL=singlePost.js.map