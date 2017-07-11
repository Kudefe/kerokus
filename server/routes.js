import express from 'express'
import ensureAuth from './controllers/authenticated/ensure'


//import controllers
import homePage from './controllers/homePage'
import gamePage from './controllers/gamesPage'
import adminPage from './controllers/adminPage'
import addGame from './controllers/addGame'
import addAd from './controllers/addAd'
import adminRegister from './controllers/adminRegister'
import adminLogin from './controllers/adminLogin'
import singleGame from './controllers/singleGame'
import editGame from './controllers/editGame'
import adminGame from './controllers/adminGame'
import adminLogout from './controllers/adminLogout'
import adminInterviews from './controllers/adminInterviews'
import adminAds from './controllers/adminTextAds'
import blog from './controllers/blog'
import blogPost from './controllers/blogPost'
import singlePost from './controllers/singlePost'
import editPost from './controllers/editBlogPost'
import adminBlog from './controllers/adminBlog'
import adminPost from './controllers/adminBlogPost'


//TODO Añadir admin/ads y admin/games

const routes = express()

//main
routes.get('/', homePage.get)
routes.get('/games', gamePage.get)
routes.get('/games/:id', singleGame.get)

//blog y blog posts
routes.get('/blog', blog.get)
routes.get('/admin/blog/add', ensureAuth, blogPost.get)
routes.post('/admin/blog/add', ensureAuth, blogPost.post)
routes.get('/blog/:id', singlePost.get)
routes.get('/admin/edit/blog/:id', ensureAuth, editPost.get)
routes.post('/admin/edit/blog/:id', ensureAuth, editPost.post)
routes.delete('/admin/blog/:id', editPost.delete)
routes.get('/admin/blog', ensureAuth, adminBlog.get)
routes.get('/admin/blog/:id', ensureAuth, adminPost.get)


//add game and Ad
routes.get('/admin/add/game', ensureAuth, addGame.get)
routes.get('/admin/add/ad', ensureAuth, addAd.get)
routes.post('/admin/add/game', ensureAuth, addGame.post)
routes.get('/admin/games/:id', ensureAuth, adminGame.get)
routes.get('/admin/edit/:id', ensureAuth, editGame.get)
routes.post('/admin/edit/:id', ensureAuth, editGame.post)
routes.delete('/admin/games/:id', editGame.delete)


//admin routes
routes.get('/admin', ensureAuth, adminPage.get)
routes.get('/admin/register', adminRegister.get)
routes.post('/admin/register', adminRegister.post)
routes.get('/admin/login', adminLogin.get)
routes.post('/admin/login', adminLogin.post)
routes.get('/admin/:id/logout', adminLogout.get)
routes.get('/admin/interviews', ensureAuth, adminInterviews.get)
routes.get('/admin/ads', ensureAuth, adminAds.get)




export default routes
