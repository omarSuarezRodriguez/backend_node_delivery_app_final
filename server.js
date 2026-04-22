// Importamos packages
const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');


// Ejecutamos métodos
const app = express();
const server = http.createServer(app);


// Puerto
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json()); // Para parsear respuestas que recibamos en formato json
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);


// Método para arrancar servidor
// Ipconfig, ip local para probar
server.listen(3000, '192.168.20.69' || 'localhost', function() {
    console.log('Aplicación de NodeJS ', + port + ' Iniciada...');
});


// Nuestra primera ruta, ruta raiz
app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

// Ruta test
app.get('/test', (req, res) => {
    res.send('Ruta test');
});



// Error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});




// Errores
// 200 - Es una respuesta Exitosa
// 400 - La Url no existe
// 500 - Error interno del servidor (Puede ser que haya que revisar código para solucionar)