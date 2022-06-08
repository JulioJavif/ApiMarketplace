const express = require("express");
const ProductsController = require('./contoller.js')

const router = express.Router();

module.exports  = (app)=> {
    router
      .get('/products', ProductsController.getAllProducts)
      
      // .get('/products/:id', ProductsController.getProduct)
      // .post('/product', ProductsController.createProduct)

      // .put('/products/:id', ProductsController.updateProduct)
      // .delete('/products/:id', ProductsController.deleteProduct)
  
   
    app.use('/api/v1', router)
}