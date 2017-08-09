'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _expressFlash = require('express-flash-2');

var _expressFlash2 = _interopRequireDefault(_expressFlash);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_database2.default.database);
var db = _mongoose2.default.connection;

//check connection
db.once('open', function () {
  console.log('conectado a mongoDB');
});

//check for db errors
db.on('error', function (err) {
  console.log(err);
});

var app = (0, _express2.default)();

app.set('views', __dirname + './../views');

app.engine('handlebars', (0, _expressHandlebars2.default)({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parse application/json
app.use(_bodyParser2.default.json());

//set public folder
app.use(_express2.default.static(_path2.default.join(__dirname, './../public')));

app.use((0, _morgan2.default)('dev'));

app.use((0, _cookieParser2.default)('keyboard cat'));

app.use((0, _expressSession2.default)({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use((0, _expressFlash2.default)());

app.use((0, _expressValidator2.default)({
  errorFormatter: function errorFormatter(param, msg, value) {
    var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

require('./config/passport')(_passport2.default);
//passport middleware
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

//Route global para mandar a todos los views un user
app.get('*', function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.get('/flash', function (req, res) {
  res.flash('info', 'no se que chucha!');
  res.redirect('/games');
});

app.get('/no-flash', function (req, res) {
  res.redirect('/games');
});

app.get('/otro', function (req, res) {
  res.flash('info', 'soy otro flash');
  res.redirect('/games');
});

app.use('/', _routes2.default);

exports.default = app;
//# sourceMappingURL=app.js.map