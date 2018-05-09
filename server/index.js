// APP
import express from 'express';
const app = express();

const PORT = 8888;
// CONFIGS
import {configureServer} from './configs'
configureServer(app)

// ROUTES
import { configureRoutes } from './routes'
configureRoutes(app)

// RUN
app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    console.log(`EXPRESS SERVER Running on port: ${PORT}`)
});