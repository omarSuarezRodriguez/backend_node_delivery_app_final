const User = require('../models/user');

module.exports = {

    // req = request , res = response
    register(req, res) {

        const user = req.body; // Capturo los datos que me envie el cliente
        User.create(user, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realizó correctamente',
                data: data // El ID del nuevo usuario que se registró
            });

        });

    }

}







