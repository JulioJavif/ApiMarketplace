const db = require('../../src/database/models/index')

const getAllProducts = async ()=>{
    return await db.products.findAll();
}


module.exports = {
    getAllProducts
}