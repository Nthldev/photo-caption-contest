const express = require('express');
const imagesRouter = express.Router();
const { getImages, getImagesByID } = require('../controllers/imagesController');
const { createCaption } = require('../controllers/captionsController');
const { isAuthorized } = require ('../middlewares/auth');
const { cacheGetImages, cacheGetImageById } = require('../middlewares/cache');

//GET para todas as imagens
imagesRouter.get('/', cacheGetImages, getImages);

//GET para imagem por ID com Legendas
imagesRouter.get('/:id', cacheGetImageById, getImagesByID);

//POST para inserção de Legenda na Imagem por Usuario
imagesRouter.post('/:id/captions', isAuthorized, createCaption);

module.exports = imagesRouter;