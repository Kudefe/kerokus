'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

var blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  title2: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var Blog = _mongoose2.default.model('Blog', blogPostSchema);

exports.default = Blog;
//# sourceMappingURL=blogPost.js.map