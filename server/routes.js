import express from 'express'

//import controllers
import homePage from './controllers/homePage'

const routes = express()

routes.get('/', homePage.get)

export default routes
