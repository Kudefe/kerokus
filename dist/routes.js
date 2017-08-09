'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ensure = require('./controllers/authenticated/ensure');

var _ensure2 = _interopRequireDefault(_ensure);

var _homePage = require('./controllers/homePage');

var _homePage2 = _interopRequireDefault(_homePage);

var _gamesPage = require('./controllers/gamesPage');

var _gamesPage2 = _interopRequireDefault(_gamesPage);

var _adminPage = require('./controllers/adminPage');

var _adminPage2 = _interopRequireDefault(_adminPage);

var _addGame = require('./controllers/addGame');

var _addGame2 = _interopRequireDefault(_addGame);

var _addAd = require('./controllers/addAd');

var _addAd2 = _interopRequireDefault(_addAd);

var _adminRegister = require('./controllers/adminRegister');

var _adminRegister2 = _interopRequireDefault(_adminRegister);

var _adminLogin = require('./controllers/adminLogin');

var _adminLogin2 = _interopRequireDefault(_adminLogin);

var _singleGame = require('./controllers/singleGame');

var _singleGame2 = _interopRequireDefault(_singleGame);

var _editGame = require('./controllers/editGame');

var _editGame2 = _interopRequireDefault(_editGame);

var _adminGame = require('./controllers/adminGame');

var _adminGame2 = _interopRequireDefault(_adminGame);

var _adminLogout = require('./controllers/adminLogout');

var _adminLogout2 = _interopRequireDefault(_adminLogout);

var _adminInterviews = require('./controllers/adminInterviews');

var _adminInterviews2 = _interopRequireDefault(_adminInterviews);

var _adminTextAds = require('./controllers/adminTextAds');

var _adminTextAds2 = _interopRequireDefault(_adminTextAds);

var _blog = require('./controllers/blog');

var _blog2 = _interopRequireDefault(_blog);

var _blogPost = require('./controllers/blogPost');

var _blogPost2 = _interopRequireDefault(_blogPost);

var _singlePost = require('./controllers/singlePost');

var _singlePost2 = _interopRequireDefault(_singlePost);

var _editBlogPost = require('./controllers/editBlogPost');

var _editBlogPost2 = _interopRequireDefault(_editBlogPost);

var _adminBlog = require('./controllers/adminBlog');

var _adminBlog2 = _interopRequireDefault(_adminBlog);

var _adminBlogPost = require('./controllers/adminBlogPost');

var _adminBlogPost2 = _interopRequireDefault(_adminBlogPost);

var _adminGamesPage = require('./controllers/adminGamesPage');

var _adminGamesPage2 = _interopRequireDefault(_adminGamesPage);

var _submit = require('./controllers/submit');

var _submit2 = _interopRequireDefault(_submit);

var _faq = require('./controllers/faq');

var _faq2 = _interopRequireDefault(_faq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import controllers
var routes = (0, _express2.default)();

//main
routes.get('/', _homePage2.default.get);
routes.get('/games', _gamesPage2.default.get);
routes.get('/games/:title2', _singleGame2.default.get);

//blog y blog posts
routes.get('/blog', _blog2.default.get);
routes.get('/admin/blog/add', _ensure2.default, _blogPost2.default.get);
routes.post('/admin/blog/add', _ensure2.default, _blogPost2.default.post);
routes.get('/blog/:title2', _singlePost2.default.get);
routes.get('/admin/edit/blog/:id', _ensure2.default, _editBlogPost2.default.get);
routes.post('/admin/edit/blog/:id', _ensure2.default, _editBlogPost2.default.post);
routes.delete('/admin/blog/:id', _editBlogPost2.default.delete);
routes.get('/admin/blog', _ensure2.default, _adminBlog2.default.get);
routes.get('/admin/blog/:id', _ensure2.default, _adminBlogPost2.default.get);

//submit route
routes.get('/submit', _submit2.default.get);

//faq
routes.get('/faq', _faq2.default.get);

//add game and Ad
routes.get('/admin/add/game', _ensure2.default, _addGame2.default.get);
routes.get('/admin/add/ad', _ensure2.default, _addAd2.default.get);
routes.post('/admin/add/game', _ensure2.default, _addGame2.default.post);
routes.get('/admin/games/:id', _ensure2.default, _adminGame2.default.get);
routes.get('/admin/edit/:id', _ensure2.default, _editGame2.default.get);
routes.post('/admin/edit/:id', _ensure2.default, _editGame2.default.post);
routes.delete('/admin/games/:id', _editGame2.default.delete);

//admin routes
routes.get('/admin', _ensure2.default, _adminPage2.default.get);
routes.get('/admin/register', _adminRegister2.default.get);
routes.post('/admin/register', _adminRegister2.default.post);
routes.get('/admin/login', _adminLogin2.default.get);
routes.post('/admin/login', _adminLogin2.default.post);
routes.get('/admin/:id/logout', _adminLogout2.default.get);
routes.get('/admin/interviews', _ensure2.default, _adminInterviews2.default.get);
routes.get('/admin/ads', _ensure2.default, _adminTextAds2.default.get);
routes.get('/admin/games', _ensure2.default, _adminGamesPage2.default.get);

exports.default = routes;
//# sourceMappingURL=routes.js.map