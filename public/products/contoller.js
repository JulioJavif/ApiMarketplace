const { response } = require('express');
const service = require('./service')

const getAllProducts = async(req, res)=>{
  try {
    res.status(200).send(await service.getAllProducts())
  }catch (error) {
    console.log('[user controller] No se que paso', err);
    res.send({error: 'Error interno por pwrra'});
  }
  
}

const getProductById = async(req, res)=>{
  try {
    res.status(200).send(await service.getProductById(req.params.id))
  }catch (error) {
    console.error('[user controller] error al leer por ID', err);
    res.send({error: 'Error interno'});
  }
  
}

const createProduct = async(req, res)=>{
  try {
    res.status(200).send(await service.createProduct(req))
  } catch (error) {
    console.error('[user controller] error. ', error);
    res.send({error: 'Error interno'});
  }
}

const updateProduct = async(req, res)=>{
  console.log(req.params.id, req.body)
  try {
    res.status(200).send(await service.updateProduct(req.params.id, req.body))
  } catch (error) {
    console.error('[user controller] error. ', error);
    res.send({error: 'Error interno'});
  }
}

const deleteProduct = (req, res)=>{
  console.log(req.params.id);
  service.deleteProduct(req.params.id).then(result =>{
    res.status(200).send({
      status:200
    })
  }).catch(error=>{
    console.error('[user controller] error. ', error);
    res.send({error: 'Error Interno'})
  })
}


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}