const db = require('../../src/database/models/index');

async function getSession(email, password) {
    return await db.users.findOne({
        'where': {
            'email': email,
            'password': password
        }
    })
}

module.exports = {
    getSession,
}