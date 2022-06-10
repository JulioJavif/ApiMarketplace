const express = require('express');
const controller = require('./controller');
const {verifyToken} = require('../auth/controller');

const router = express.Router();

module.exports = (app) => {
    router
        .post('/', controller.saveUser)
        .get('/', verifyToken, controller.getAll)
        .put('/update/:id', verifyToken, controller.updateUser)
        .delete('/delete/:id', verifyToken, controller.deleteUser)
        .get('/:id', verifyToken, controller.getById);

    app.use('/user', router);
}