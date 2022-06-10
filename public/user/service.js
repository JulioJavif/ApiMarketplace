const db = require('../../src/database/models/index');
const { Op } = require('sequelize');

async function getAll() {
    return await db.users.findAll({
        'attributes': ['name', 'email', 'phone', 'roles_idroles', 'createdAt', 'updatedAt']
    });
}

async function getByID(id) {
    return await db.users.findOne({
        'where': {
            'id': id
        },
        'attributes':[
            'name', 'email', 'phone', 'roles_idroles', 'createdAt', 'updatedAt'
        ]
    });
}

async function isAnUser(email, phone) {
    return await db.users.findOne({
        'where': {
            [Op.or]: {
                'email': email,
                'phone': phone
            }
        }
    });
}

async function save(data) {
    //console.log(data);
    return await db.users.create({
        'name': data.name,
        'email': data.email,
        'password': data.pass,
        'phone': data.phone,
        'dni': data.dni,
        'roles_idroles': data.roles_idroles,
        'createdAt': new Date().toUTCString(),
        'updatedAt': new Date().toUTCString()
    });
}

async function updateUser(id, data) {
    return await db.users.update({
        ...data,
        updatedAt: new Date().toUTCString()
    }, {
        where: {
            'id': id
        }
    });
}

async function deleteUser(id) {
    return await db.users.destroy({
        'where': {
            'id': id
        }
    });
}

module.exports = {
    getAll,
    getByID,
    isAnUser,
    save,
    updateUser,
    deleteUser
}