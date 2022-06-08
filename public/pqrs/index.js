const express = require('express');
const controller = require('./controller');

const router = express.Router();

module.exports = (app) => {
    router
        .get('/', controller.getAll)
        .get('/:id', controller.getById)
        .post('/', controller.savePqrs);

    app.use('/pqrs', router);
}