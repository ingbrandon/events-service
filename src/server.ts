import App from './app'

import bodyParser from 'body-parser'
import loggerMiddleware from '@helper/logger'


import PusherController from './pusher/pusher.controller'


const app = new App(
    [
        new PusherController()
    ],
    4000
)

app.listen();
