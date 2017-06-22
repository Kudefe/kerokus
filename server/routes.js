import express from 'express'

//import controllers
import homePage from './controllers/homePage'
import gamePage from './controllers/gamesPage'
import adminPage from './controllers/adminPage'
import addGame from './controllers/addGame'
import addAd from './controllers/addAd'
import adminRegister from './controllers/adminRegister'
import adminLogin from './controllers/adminLogin'

const routes = express()

routes.get('/', homePage.get)
routes.get('/games', gamePage.get)

//add game and Ad
routes.get('/admin/add/game', addGame.get)
routes.get('/admin/add/ad', addAd.get)
routes.post('/admin/add/game', addGame.post)

//admin routes
routes.get('/admin', adminPage.get)
routes.get('/admin/register', adminRegister.get)
routes.get('/admin/login', adminLogin.get)

export default routes
