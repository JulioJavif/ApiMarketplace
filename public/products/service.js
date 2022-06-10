const db = require('../../src/database/models/index')

const getAllProducts = async ()=>{
    return await db.products.findAll();
}

const getProductById = async (id)=>{
    console.log(id)
    return await db.products.findOne({
        'where': {
            'id': id
        }
    })
}


const createProduct = async (req)=>{
    const product = req.body

    return await db.products.create({
        'title': product.title, 
        'description': product.description,
        'price' : product.price,
        'stok' : product.stok,
        'image' : product.image,
    })
}

const updateProduct = async (id, data)=>{
    return await db.products.update(
        {
            ...data
        },
        {
            'where':{
                'id': id
            }
        }       
    )
}

const deleteProduct = async (id)=>{
    
    return await db.products.destroy({
        'where': {
            'id': id
        }
    })
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}