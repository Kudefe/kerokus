'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogPost = require('./../models/blogPost');

var _blogPost2 = _interopRequireDefault(_blogPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminPost = {};

adminPost.get = function (req, res) {
  _blogPost2.default.findById(req.params.id, function (err, blogs) {
    if (err) {
      throw err;
    } else {
      res.render('admin_blog_post', {
        blogs: blogs
      });
    }
  });
};

exports.default = adminPost;
//# sourceMappingURL=adminBlogPost.js.map