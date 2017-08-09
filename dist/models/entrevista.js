"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

//en produccion, debo pedir todos los datos requeridos
var interviewSchema = new Schema({

  title: {
    type: String, required: true
  },
  title2: {
    type: String, required: true
  },
  author: {
    type: String, required: true
  },
  body: {
    type: String, required: true
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now
  },
  units: {
    type: String,
    required: false,
    default: "N/A"
  },
  companyName: {
    type: String, required: false
  },
  published: {
    type: String, required: true
  },
  imageOne: {
    type: String,
    required: false,
    default: "http://lorempixel.com/800/600/"
  },
  imageTwo: {
    type: String,
    required: false,
    default: "http://lorempixel.com/1080/1080/"
  }
});

var Game = _mongoose2.default.model('Game', interviewSchema);

exports.default = Game;
//# sourceMappingURL=entrevista.js.map