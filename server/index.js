// IMPORTS
import express from 'express'

// INITALIZE APP
const app = express()
// CONFIGS
import {configureServer} from './configs';
configureServer(app)

// ROUTES
import { configureRoutes } from './routes'
configureRoutes(app)

// RUN
runServer(app)