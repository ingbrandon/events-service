
const { check, oneOf, validationResult } = require('express-validator');
const routes = require('express').Router();


routes.get('/users/:name', function (req, res) { // (3)
    console.log('User joined: ' + req.params.name);
    res.sendStatus(204).json({ message: 'successfully!' });;
});


routes.post('/users',
    oneOf([
        [
            check('name').exists().withMessage('El campo name es requerido'),
        ]])
    , function (req, res) { // (3)
        try {
            validationResult(req).throw();

            // yay! we're good to start selling our skilled services :)))
            //res.json(...);
            console.log('User joined: ' + req.body.name);
            res.sendStatus(204);
        } catch (err) {
            // Oh noes. This user doesn't have enough skills for this...
            res.status(400).json({
                error: true,
                message: err
            });
        }
    });



module.exports = routes;