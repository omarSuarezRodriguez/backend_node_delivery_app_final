const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martin1',
    database: 'udemy_delivery',
});




// Conectar la base de datos
db.connect(function(err) {
    if (err) throw err;
    console.log('Database Connected!');
});


// Para exportar el objeto db y poder accederlo desde cualquier archivo que yo vaya creando
module.exports = db;