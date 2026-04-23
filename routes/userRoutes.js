const usersController = require('../controllers/usersController');


// La aplicación, este sistema
module.exports = (app) => {

    // GET -> Obtener Datos
    // POST -> Almacenar Datos
    // PUT -> Actualizar Datos
    // DELETE -> Eliminar Datos

    app.post('/api/users/create', usersController.register);


}