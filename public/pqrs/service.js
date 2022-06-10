const db = require('../../src/database/models/index');

async function getAll() {
    return await db.users.findAll({
        'attributes': ['users_idusuarios', 'type', 'subject', 'compose_email', 'response', 'isanswered']
    });
}

async function getByID(id) {
    return await db.pqrs.findOne({
        'where': {
            'id': id
        }
    });
}

async function getByType(id) {
    return await db.pqrs.findOne({
        'where': {
            'type': type
        }
    });
}

async function save(data) {
    return await db.pqrs.create({
        'users_idusuarios': data.users_idusuarios,
        'type': data.type,
        'subject': data.subject,
        'compose_email': data.compose_email,
        'response': data.response,
        'isanswered': data.isanswered
    });
}

async function update(id, data) {
    return await db.pqrs.update({
        ...data
    }, {
        where: {
            'id': id
        }
    });
}

async function del(id) {
    return await db.pqrs.destroy({
        'where': {
            'id': id
        }
    });
}


module.exports = {
    getAll,getByID,getByType,save,update,del
}