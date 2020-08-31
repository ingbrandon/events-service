//Impors
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


// Rutas
const routes_pruebas = require('@routes/pruebas');
const routes_chat = require('@routes/chat');
const routes_locations = require('@routes/locations');

//Constantes
const corsOptions = require('@constants/cors');

//Helpers
const MonogoDBConnect = require('@helper/ mongo-connection');
// conectar a la base de datos mongo.
MonogoDBConnect();





const app = express(); // inicializacion de express
app.use(cors(corsOptions));
app.use(bodyParser.json());



//  Connect all our routes to our application
app.use('/pruebas', routes_pruebas);
app.use('/', routes_chat);
app.use('/', routes_locations);




app.listen(4000, function () { // (6)
    console.log('App listening on port 4000');
});