const { Photo, Caption, User } = require('../models');
const { myCache } = require('../middlewares/cache');

//ROTA GET PARA RECEBER TODAS AS IMAGENS
const getImages = async (req, res) => {
    try {
        const allImages = await Photo.findAll();

        const plainAllImages = allImages.map(image => image.toJSON());
        myCache.set('get_images', plainAllImages);

        return res.status(200).json(plainAllImages);
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
};

//ROTA GET PARA RECEBER IMAGEM POR ID COM RESPECTIVAS LEGENDAS
const getImagesByID = async (req, res) => {
    const imageId = req.params.id;
    try {
        const imageByIdWithCaptions = await Photo.findOne({
            attributes: ['id', 'authorName', 'photoName', 'imageFile'],
            where:{ id: imageId },
            include: [{
                model: Caption,
                as: 'captions',
                attributes: [ 'text' ],
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['nome']
                }]
            }]
        });

        const plainImageByIdWithCaptions = imageByIdWithCaptions.toJSON();

        myCache.set(`image_id_${req.params.id}`, plainImageByIdWithCaptions);

        return res.status(200).json(plainImageByIdWithCaptions);
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    getImages,
    getImagesByID
};