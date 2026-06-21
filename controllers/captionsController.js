const { Caption } = require('../models');
const { myCache } = require('../middlewares/cache');

//ROTA POST PARA INSERIR LEGENDA NA FOTO POR USUARIO
const createCaption = async (req, res) => {
    const captionText = req.body.text;
    const userCaptionId = req.session.userId;
    const imageCaptionId = req.params.id;
    try {
        const insertCaption = await Caption.create({text: captionText, userId: userCaptionId, imageId: imageCaptionId});

        myCache.del(`image_id_${req.params.id}`);

        return res.status(201).json({message: "Legenda criada com sucesso!", captionCreated: insertCaption.text});
    } catch(error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({message: "Este usuário já criou uma legenda para esta foto! Permissão de somente uma legenda por usuario/foto."});
        }
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    createCaption
};