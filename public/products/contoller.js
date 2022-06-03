const {pool} = require('./../../db');

var fecha = new Date();
  let y = fecha.getFullYear();
  let m = fecha.getMonth() + 1;
  let d = fecha.getDate();
  let h = fecha.getHours();
  let mi = fecha.getMinutes();
  let s = fecha.getSeconds();

  //console.log(y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s);
  fecha = y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;


module.exports.ProductsController = {
    getAllProducts: (req, res)=>{
        try {
          pool.query('select * from products', (error, result)=>{
            if(error){
              console.log(error)
            }
            res.status(200).send(
              result
            );
          });
        } catch (error) {
          console.error(error);
        }
      },
      getProduct: (req, res)=>{
        try {
          const {id} = req.params;
          pool.query(`Select * from products where id=${id}`, (error, result)=>{
            if(error){
              console.log(error)
            }
            res.status(200).send(
              result
            );
          })
        } catch (error) {
          console.error(error)
        }
      },
      createProduct: (req, res)=>{
        const product = req.body;
        try {
          pool.query(
            `INSERT INTO products
            (id, image, title, price, description, stok, createdAt, updatedAt)
            VALUES (
              '${product.id}',
              '${product.image}',
              '${product.title}',
              '${product.price}',
              '${product.description}',
              '${product.stok}',
              '${fecha}',
              '${fecha}')`,
            (error, result)=>{
              if(error){
                console.log(error)
              }
              res.status(201).send(
                result
              );
          })
        } catch (error) {
          console.error(error)
        }
      }
}