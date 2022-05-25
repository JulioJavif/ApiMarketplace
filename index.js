const express = require('express');
const cors = require('cors');
const { ServerConfig } = require('./config/server');

const app = express();

app.use(express.json());
app.use(cors());

// Debajo de esta linea agregar las rutas


const port = ServerConfig.PORT || 4001;

app.listen(port, ()=> {
    console.log('Servidor ejecutandose es puerto: '+ port);
});