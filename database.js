const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Tododb'
});

connection.connect((err) => {
    if(!err){
        console.log("Database Connected....");
    }
    else{
        console.log("Database Connection Error....", err);
    }
});

module.exports = connection;
