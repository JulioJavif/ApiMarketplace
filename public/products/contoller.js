const service = require('./service')

const getAllProducts = async(req, res)=>{
  res.status(200).send(await service.getAllProducts())
}

module.exports = {
  getAllProducts
}