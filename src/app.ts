
import express from 'express';
import * as bodyParser from 'body-parser';

const cors = require('cors'); // importar cors 
const corsOptions = require('@constants/cors');


class App {
    public app: express.Application;
    public port: number;

    constructor(controllers:any, port:any) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    /** Inicializar Middlewares */
    private initializeMiddlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json());
    }

    /** Inicializar controladores */
    private initializeControllers(controllers:any) {
        controllers.forEach((controller:any) => {
            this.app.use('/', controller.router);
        });
    }

    /** Para ejecutar nuestro servicio */
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;