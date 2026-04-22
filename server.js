const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;
app.set('port', port);

// Ipconfig, ip local para probar
server.listen(3000, '192.168.20.69' || 'localhost', function() {
    console.log('Aplicación de NodeJS ', + port + ' Iniciada...');
});