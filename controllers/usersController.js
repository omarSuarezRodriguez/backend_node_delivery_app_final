const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {


    // login
    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, myUser) => {

            // Testing
            console.log('Error ', err);
            console.log('Usuario ', myUser);

            // myUser = usuario

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            if (!myUser) {
                return res.status(401).json({ // El cliente no tiene autorización para realizar esta petición (401)
                    success: false,
                    message: 'El email no fue encontrado',
                });
            }

            const isPasswordValid = await bcrypt.compare(password, myUser.password);

            if (isPasswordValid) {
                const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey, {});

                const data = {
                    id: myUser.id,
                    name: myUser.name,
                    lastname: myUser.lastname,
                    email: myUser.email,
                    phone: myUser.phone,
                    image: myUser.image,
                    session_token: `JWT ${token}`
                }

                return res.status(201).json({
                success: true,
                message: 'El usuario fue autenticado',
                data: data
                });
            }
            else {
                return res.status(401).json({ // El cliente no tiene autorización para realizar esta petición (401)
                    success: false,
                    message: 'El password es incorrecto',
                });
            }

            

        });

    },

    // req = request , res = response
    register(req, res) {

        const user = req.body; // Capturo los datos que me envie el cliente
        User.create(user, (err, myUser) => {

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







