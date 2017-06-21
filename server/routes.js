import express from 'express'

//import controllers
import homePage from './controllers/homePage'
import gamePage from './controllers/gamesPage'

const routes = express()

routes.get('/', homePage.get)
routes.get('/games', gamePage.get)

export default routes
