const express = require("express");
const ProductsController = require('./contoller.js')

const router = express.Router();

module.exports  = (app)=> {
    router
      .get('/products', ProductsController.getAllProducts)
      .get('/product/:id', ProductsController.getProductById)
      .post('/product', ProductsController.createProduct)
      .put('/product/:id', ProductsController.updateProduct)
      .delete('/product/:id', ProductsController.deleteProduct)
  
   
    app.use('/api/v1', router)
}