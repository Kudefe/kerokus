"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(process.env.PORT || 3000, function (req, res) {
  console.log("funcionando");
});
//# sourceMappingURL=index.js.map