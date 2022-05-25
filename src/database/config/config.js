const { DatabaseConfig } = require('./../../../config/database');

module.exports = {
  "development": {
    "username": DatabaseConfig.user,
    "password": DatabaseConfig.psw,
    "database": DatabaseConfig.name,
    "port": DatabaseConfig.port,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
