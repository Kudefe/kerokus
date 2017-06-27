import express from 'express'

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


//TODO Añadir admin/ads y admin/games

const routes = express()

routes.get('/', homePage.get)
routes.get('/games', gamePage.get)
routes.get('/games/:id', singleGame.get)

//add game and Ad
routes.get('/admin/add/game', addGame.get)
routes.get('/admin/add/ad', addAd.get)
routes.post('/admin/add/game', addGame.post)
routes.get('/admin/games/:id', adminGame.get)
routes.get('/admin/edit/:id', editGame.get)
routes.post('/admin/edit/:id', editGame.post)
routes.delete('/admin/games/:id', editGame.delete)

//admin routes
routes.get('/admin', adminPage.get)
routes.get('/admin/register', adminRegister.get)
routes.post('/admin/register', adminRegister.post)
routes.get('/admin/login', adminLogin.get)
routes.post('/admin/login', adminLogin.post)

export default routes
