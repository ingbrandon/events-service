import express from 'express';
import { Request, Response } from 'express'
import { check, body, oneOf, validationResult } from 'express-validator';
import Pusher from 'pusher';

import * as PusherInterface from './pusher.iterface';

const pusherConfig = require('@constants/pusher.json');// importar la configruacion de pushcer
const pusherClient = new Pusher(pusherConfig);


class PusherController {

    public path = '/pusher';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path + "/:name", this.getWelcome);
        this.router.post(this.path,
            oneOf([
                [
                    body('candidates').exists().isArray().withMessage('El campo candidates es requerido'),
                    body('location').exists().isEmpty().withMessage('El description location es requerido'),
                    body('date').exists().isEmpty().withMessage('El coordinates date es requerido'),
                ]])
         , this.postCandidates);
    }


    getWelcome = (req: Request, res: Response) => {
        console.log('User joined: ' + req.params.name);
        res.send(
            {
                message: 'successfully!',
                response: 'Bienvenido a nuestra prueba '+req.params.name
            }
        );
    }

    postCandidates = (req: Request, res: Response)  =>{
        try {
            validationResult(req).throw();

            console.log('User on pusher route ');
            pusherClient.trigger('chat_channel', 'candidates', {
                candidates: req.body.candidates,
                location: req.body.location,
                date: req.body.date
            });
            res.sendStatus(204).json({
                message: 'successfully!',
                response: 'Se ha realizado con exito la operacion.'
            });

            
        } catch (err) {
            // Oh noes. This user doesn't have enough skills for this...
            //console.log(err._message:);
            res.status(400).json({
                error: true,
                message: err
            });
        }
    }

   

}

export default PusherController;