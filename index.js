const express = require('express');
const cors = require('cors');
const { ServerConfig } = require('./config/server');

const{ApiMarketProducts} = require('./public/products/index')

const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



// Debajo de esta linea agregar las rutas

ApiMarketProducts(app)  //Products Controller  

const port = ServerConfig.PORT || 4001;

app.listen(port, ()=> {
    console.log('Servidor ejecutandose es puerto: '+ port);
});