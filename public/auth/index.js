const express = require('express');
const controller = require('./controller');

const router = express.Router();

module.exports = (app) => {
    router
        .post('/', controller.getToken);
        // .get('/probe', controller.verifyToken);

    app.use('/auth', router)
}
