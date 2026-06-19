const express = require('express');
const authRouter = express.Router();
const { registerUser, loginUser } = require('../controllers/authController')

//ROTA POST PARA CRIAÇÃO DE NOVO USUARIO
authRouter.post('/register', registerUser);

//ROTA POST PARA LOGIN DE USUARIO
authRouter.post('/login', loginUser);

module.exports = authRouter;