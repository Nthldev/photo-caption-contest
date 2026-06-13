const express = require('express');
const imagesRouter = express.Router();
const { getImages, getImagesByID } = require('../controllers/imagesController');
const { createCaption } = require('../controllers/captionsController');

//GET para todas as imagens
imagesRouter.get('/', getImages);

//GET para imagem por ID com Legendas
imagesRouter.get('/:id', getImagesByID);

//POST para inserção de Legenda na Imagem por Usuario
imagesRouter.post('/:id/captions', createCaption);

module.exports = imagesRouter;