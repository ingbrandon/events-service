const { check, oneOf, validationResult } = require('express-validator');
const routes = require('express').Router();

const Pusher = require('pusher');

const pusherConfig = require('@constants/pusher.json'); // (1)
const pusherClient = new Pusher(pusherConfig);





routes.put('/users/:name', function (req: any, res: any) { // (4)
    console.log('User joined: ' + req.params.name);
    pusherClient.trigger('chat_channel', 'join', {
        name: req.params.name
    });
    res.sendStatus(204);
});

routes.delete('/users/:name', function (req: any, res: any) { // (5)
    console.log('User left: ' + req.params.name);
    pusherClient.trigger('chat_channel', 'part', {
        name: req.params.name
    });
    res.sendStatus(204);
});

routes.post('/users/:name/messages', function (req: any, res: any) { // (5)
    console.log('User ' + req.params.name + ' sent message: ' + req.body.message);
    pusherClient.trigger('chat_channel', 'message', {
        name: req.params.name,
        message: req.body.message
    });
    res.sendStatus(204);
});


module.exports = routes;