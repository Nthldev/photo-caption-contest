const express = require('express');
const imagesRouter = express.Router();
const { getImages, getImagesByID } = require('../controllers/imagesController');
const { createCaption } = require('../controllers/captionsController');
const { isAuthorized } = require ('../middlewares/auth');
const { cacheGetImages, cacheGetImageById } = require('../middlewares/cache');


//GET para todas as imagens
/**
 * @openapi
 * /images: 
 *   get:
 *     summary: Retrieve all images without caption.
 *     responses:
 *       200:
 *         description: List of images successfully returned.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 type: object
 *                 properties: 
 *                   id:
 *                     type: integer
 *                     description: Unique ID in the database.
 *                   authorName:
 *                     type: string
 *                     description: Name of the original author or user on Pinterest.
 *                   photoName:
 *                     type: string
 *                     description: Name of the photo in the database.
 *                   imageFile:
 *                     type: string
 *                     description: Relative path to the image file.
 *             example:
 *               - id: 1
 *                 authorName: "John Doe"
 *                 photoName: "sunset_beach"
 *                 imageFile: "/images/sunset_beach.jpg"
 *               - id: 2    
 *                 authorName: "Jane Smith"
 *                 photoName: "mountain_view"
 *                 imageFile: "/images/mountain_view.jpg"    
 *       500:
 *         description: Server connection error logging the error message.
 */
imagesRouter.get('/', cacheGetImages, getImages);

//GET para imagem por ID com Legendas
/**
 * @openapi
 * /images/{id}:
 *   get:
 *     summary: Retrieve an image by id
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: numeric id of the image in database
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Succesfully retrieved image by ID
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique ID of the image in the database.
 *                 authorName:
 *                   type: string
 *                   description: Name of the original author or user on Pinterest.
 *                 photoName:
 *                   type: string
 *                   description: Name of the photo in the database.
 *                 imageFile:
 *                   type: string
 *                   description: Relative path to the image file.
 *                 captions:
 *                   type: array
 *                   description: Array of objetcs with associated captions.
 *                   items:
 *                     type: object
 *                     properties:
 *                       text:
 *                         type: string
 *                         description: Caption text
 *                       user:
 *                         type: object
 *                         properties:
 *                           nome:
 *                             type: string
 *                             description: Name of the caption Author
 *             example:
 *               id: 1
 *               authorName: "John Doe"
 *               photoName: "sunset_beach"
 *               imageFile: "/images/sunset_beach.jpg"
 *               captions: 
 *                 - text: "So it goes another day!"
 *                   user:
 *                     nome: "Nathan"
 *                 - text: "Horizon says goodbye"
 *                   user:
 *                     nome: "Marcus"
 *       500:
 *         description: Server connection error logging the error message.        
 */ 
imagesRouter.get('/:id', cacheGetImageById, getImagesByID);

//POST para inserção de Legenda na Imagem por Usuario
/**
 * @openapi
 * /images/{id}/captions:
 *   post:
 *     summary: Post caption to an image select by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: numeric id of the image in database
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Caption text
 *     responses:
 *       201:
 *         description: succesfully inserted a caption
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: text informing that was successfull.
 *                 captionCreated:
 *                   type: string
 *                   description: text of the created caption.
 *             example:
 *               message: "Legenda criada com sucesso!"  
 *               captionCreated: "So it goes another day!"
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
 *               message: "Este usuário já criou uma legenda para esta foto! Permissão de somente uma legenda por usuario/foto."
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
 *     security:
 *       - cookieAuth: [] 
 */
imagesRouter.post('/:id/captions', isAuthorized, createCaption);

module.exports = imagesRouter;