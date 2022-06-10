const express = require('express');
const cors = require('cors');
const { ServerConfig } = require('./config/server');
const APIAuth = require('./public/auth/index');
const APIUser = require('./public/user/index');

const app = express();

app.use(express.json());
app.use(cors());

// Debajo de esta linea agregar las rutas
APIAuth(app);
APIUser(app);

const port = ServerConfig.PORT || 4001;

app.listen(port, ()=> {
    console.log('Servidor ejecutandose es puerto: '+ port);
});