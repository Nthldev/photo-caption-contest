const express = require('express');
const authRouter = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController')

//ROTA POST PARA CRIAÇÃO DE NOVO USUARIO
/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: register new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               email:
 *                 type: string
 *                 description: User's email
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       201:
 *         description: succesfully created an account
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: text informing that was successfull..
 *             example: 
 *               message: "Usuario John Doe criado com sucesso!"  
 *       409:
 *         description: not authorized because of the unique restriction
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: text informing the reason it was not authorized
 *             example:
 *               message: "Email já cadastrado!"
 *       500:
 *         description: internar server error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: error message           
 */
authRouter.post('/register', registerUser);

//ROTA POST PARA LOGIN DE USUARIO
/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       200:
 *         description: succesfully logged
 *         content: 
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Login realizado com sucesso!"  
 *       401:
 *         description: not authorized because of wrong password
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: text informing the reason it was not authorized
 *             example:
 *               message: "Senha incorreta!"
 *       404:
 *         description: not authorized because of wrong email
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: text informing the reason it was not authorized
 *             example:
 *               message: "Usuario não encontrado com email johndoe@email.com"
 *       500:
 *         description: internar server error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: error message           
 */
authRouter.post('/login', loginUser);

//ROTA POST PARA LOGOUT DO USUARIO
/**
 * @openapi
 * /auth/logout:
 *   post:
 *     summary: logout user
 *     responses:
 *       200:
 *         description: succesfully logged out
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                 type: string
 *             example: "Logout efetuado com sucesso!" 
 *       500:
 *         description: internar server error on trying to destroy session         
 */
authRouter.post('/logout', logoutUser);

module.exports = authRouter;