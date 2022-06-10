const service = require('./service');

//Funcion para crear pqrs

async function savePqrs(req, res) {
    let data = {
        'users_idusuarios': req.body.users_idusuarios,
        'type': req.body.type,
        'subject': req.body.subject,
        'compose_email': req.body.compose_email,
        'response': req.body.response,
        'isanswered': req.body.isanswered
    }
    service.save(data).then(result => {
        res.status(200).send({
            result
        });
    })
    .catch(e => {
        console.log('[pqrs controller] error al guardar');
        res.send({error: 'Error interno'});
    });
}

//Funcion para llamar las pqrs

async function getAll(req, res) {
    service.getAll().then(result => {
        res.status(200).send(result);
    })
    
}

//Funcion para llamar pqrs por Id

async function getById(req, res) {
    service.getByID(req.params.id).then(result => {
        res.status(200).send({
            status: 200,
        });
    })
    .catch(err => {
        console.log('[pqrs controller] error al leer por ID', err);
        res.send({error: 'Error interno'});
    });
}


module.exports = {
    getAll,getById,savePqrs,
};