
import { check, body, oneOf, validationResult }  from 'express-validator';
const routes = require('express').Router();

// Models
const Mark = require("@model/markShema") // new


routes.get('/getLocations', function (req: any, res:any) {

    Mark.find({}, function (err: any, docs: any) {
        console.log(err);
        res.send(
            {
                message: 'successfully!',
                response: docs
            }
        );
    });

});


routes.get('/getLocationsBy', oneOf([
    [
        check('filter').exists().withMessage('El campo filter es requerido'),
    ]]), function (req: any, res: any) {
        try {
            validationResult(req).throw();

            let filter = req.query.filter;
            var query = Mark.find({ $or: [{ name: { $regex: filter } }, { description: { $regex: filter } }] });

            query.exec(function (err: any, someValue: any) {
                if (err) console.log(err);
                res.send(
                    {
                        message: 'successfully!',
                        response: someValue
                    }
                );
            });



        } catch (err) {
            // Oh noes. This user doesn't have enough skills for this...
            //console.log(err._message:);
            res.status(400).json({
                error: true,
                message: err
            });
        }

    });


routes.post('/createLocations',
    oneOf([
        [
            body('name').exists().withMessage('El campo name es requerido'),
            body('description').exists().withMessage('El description name es requerido'),
            body('coordinates').exists().withMessage('El coordinates name es requerido'),
        ]])
    , function (req: any, res: any) {
        try {
            validationResult(req).throw();

            const marks = new Mark({
                name: req.body.name,
                description: req.body.description,
                coordinates: req.body.coordinates,
            })

            var error = marks.validateSync();
            if (!error) {
                marks.save();
                res.send(
                    {
                        message: 'successfully!',
                        response: marks
                    }
                );
            } else {
                res.send(
                    {
                        message: 'wrong!',
                        response: []
                    }
                );
            }


        } catch (err) {
            // Oh noes. This user doesn't have enough skills for this...
            //console.log(err._message:);
            res.status(400).json({
                error: true,
                message: err
            });
        }
    });



module.exports = routes;