const express = require('express');
const cors = require('cors');
const { ServerConfig } = require('./config/server');
const APIAuth = require('./public/auth/index');
const APIUser = require('./public/user/index');
const apiProducts = require('./public/products/index')

const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Debajo de esta linea agregar las rutas
APIAuth(app);
APIUser(app);
apiProducts(app)


const port = ServerConfig.PORT || 4001;

app.listen(port, ()=> {
    console.log('Servidor ejecutandose es puerto: '+ port);
});