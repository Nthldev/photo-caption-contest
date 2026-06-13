const { Caption } = require('../models');

//ROTA POST PARA INSERIR LEGENDA NA FOTO POR USUARIO
const createCaption = async (req, res) => {
    const captionText = req.body.text;
    const userCaptionId = req.session.userId;
    const imageCaptionId = req.params.id;
    try {
        const insertCaption = await Caption.create({text: captionText, userId: userCaptionId, imageId: imageCaptionId});

        return res.status(201).json({message: "Legenda criada com sucesso!", captionCreated: insertCaption.text});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    createCaption
};