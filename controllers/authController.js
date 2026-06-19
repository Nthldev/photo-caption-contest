const { User } = require('../models');
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const userHashedPassword = await hashPassword(password);
    try{
        const newUser = await User.create({nome: name, email: email, hashPassword: userHashedPassword});
        return res.status(201).json({message:`Usuário ${name} criado com sucesso!`});
    } catch(error) {
        if (error.name === 'SequelizeUniqueConstraintError'){
            return res.status(409).json({message: "Email já cadastrado!"});
        }
        return res.status(500).json({error:error.message});
    }
};

module.exports = {
    hashPassword,
    registerUser
};

