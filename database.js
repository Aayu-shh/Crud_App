const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    database:'crud-data',
    user:'root',
    password:'#Ash28jun#'
});

module.exports = pool.promise();