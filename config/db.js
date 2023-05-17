var mysql = require('mysql');
require('dotenv').config();
var conn = mysql.createConnection({
    host: process.env.DB_HOST,            
    user: process.env.DB_USERNAME,       
    password: process.DB_PASSWORD,        
    database: process.env.DB_DATABASE     
}); 
 
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports = conn;