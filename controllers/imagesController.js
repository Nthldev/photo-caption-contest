const { Photo } = require('../models');

//ROTA GET PARA RECEBER TODAS AS IMAGENS
const getImages = async (req, res) => {
    try {
        const allImages = await Photo.findAll();

        return res.status(200).json(allImages);
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    getImages
};