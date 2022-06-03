const mysql = require('mysql2');
const { DatabaseConfig } = require('./config/database');

const config = {
    host: DatabaseConfig.DB_HOST,
    user: DatabaseConfig.DB_USER,
    port: DatabaseConfig.DB_PORT,
    password: DatabaseConfig.DB_PWD,
    database: DatabaseConfig.DB_NAME
}

const pool = mysql.createPool(config);

module.exports = {
    pool
}
