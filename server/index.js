// IMPORTS
import express from 'express'
import { configureServer, runServer } from './configs'
import { configureRoutes } from './routes'

// INITALIZE APP
const app = express()
// CONFIGS
configureServer(app)
// ROUTES
configureRoutes(app)
// RUN
runServer(app)