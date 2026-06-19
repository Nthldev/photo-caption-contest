const express = require('express');
const authRouter = express.Router();
const { registerUser } = require('../controllers/authController')

//ROTA POST PARA CRIAÇÃO DE NOVO USUARIO
authRouter.post('/register', registerUser);

module.exports = authRouter;