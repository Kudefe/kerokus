'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var homePage = {};

homePage.get = function (req, res) {
  res.flash('info', 'siiiii, funcionoooo');
  res.flash('error', "Error wn!");
  res.redirect('/games');
};

exports.default = homePage;
//# sourceMappingURL=homePage.js.map