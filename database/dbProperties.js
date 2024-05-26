const config = require('config');
require('dotenv').config();

const mysql = {
    host:  process.env.DB_HOST || config.get("master.host"),
    port:  process.env.DB_PORT || config.get("master.port"),
    user:  process.env.DB_USER || config.get("master.user"),
    password: process.env.DB_PASSWORD|| config.get("master.password") ,
    database:  process.env.DB_DATABASE || config.get("master.database")
}


const selectedDB = "mysql";

module.exports = {
    mysql,
    selectedDB
}