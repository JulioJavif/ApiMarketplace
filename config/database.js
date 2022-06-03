require('dotenv')
.config();

module.exports.DatabaseConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    psw: process.env.DB_PSW,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
}
