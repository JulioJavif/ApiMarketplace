const service = require('./service');
const security = require('../../config/security');
const { createHmac } = require('crypto');

async function saveUser(req, res) {

    service.isAnUser(req.body.email, req.body.phone)
        .then(result => {
            if (result) {
                console.log('[User controller] El correo ya existe');
                res.status(502).send({
                    status: 502,
                    error: 'El usuario ya existe'
                });
            }else{
                let password = createHmac("sha256", security.code)
                    .update(req.body.password)
                    .digest("hex");

                let data = {
                    'name': req.body.name,
                    'email': req.body.email,
                    'pass': password,
                    'phone': req.body.phone,
                    'dni': req.body.dni,
                    'roles_idroles': 2
                }
                service.save(data).then(result => {
                    res.status(201).send({
                        status: 201,
                        body: 'El usuario ha sido guardado'
                    });
                })
                .catch(err => {
                    console.log('[User controller] error al guardar: ', err);
                    res.status(500).send({
                        status: 500,
                        error: 'Error interno'
                    });
                });
            }
        })
        .catch(err => {
            console.log('[User controller] Error al validar email: ', err);
            res.status(500).send({
                status: 500,
                error: 'Internal error'
            });
        });
}

async function getAll(req, res) {
    service.getAll().then(result => {
        res.status(200).send({
            status: 200,
            body: result
        });
    })
    .catch(err => {
        console.log('[User controller] error al leer lista');
        res.send({error: 'Error interno'});
    });
}

async function getById(req, res) {
    service.getByID(req.params.id).then(result => {
        if (!result) {
            res.status(404).send({
                status: 404,
                error: 'Usuario no encontrado'
            });
            return false
        }
        res.status(200).send({
            status: 200,
            body: result
        });
        return true;
    })
    .catch(err => {
        console.log('[user controller] error al leer por ID', err);
        res.send({error: 'Error interno'});
    });
}

async function updateUser(req, res) {
    let id = req.params.id;
    let data = req.body;

    service.updateUser(id, data)
        .then(result => {
            res.status(200).send({
                status: 200,
                body: result
            });
        })
        .catch(err => {
            console.log('[User controller] error al actualizar usuario', err);
            res.status(500).send({
                status: 500,
                error: 'Internal error'
            });
        });
}

async function deleteUser(req, res) {
    service.deleteUser(req.params.id)
        .then(result => {
            if (result) {
                res.status(200).send({
                    status: 200,
                    body: 'Usuario eliminado'
                });
                return true;
            }
            res.status(404).send({
                status: 404,
                body: 'No se pudo eliminar usuario'
            });
        })
        .catch(err => {
            console.log('[User controller] error al eliminar usuario', err);
            res.status(500).send({
                status: 500,
                error: 'Internal error'
            });
        });
}

module.exports = {
    getAll,
    getById,
    saveUser,
    updateUser,
    deleteUser,
}