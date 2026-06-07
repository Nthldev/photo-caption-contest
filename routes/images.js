const express = require('express');
const imagesRouter = express.Router();
const { getImages } = require('../controllers/imagesController');


imagesRouter.get('/', getImages);

module.exports = imagesRouter;