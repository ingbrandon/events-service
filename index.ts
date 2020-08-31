//Impors
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express(); // inicializacion de express
app.use(bodyParser.json());


app.listen(4000, function () { // (6)
    console.log('App listening on port 4000');
});