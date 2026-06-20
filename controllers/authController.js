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

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({
            attributes: ['id', 'email', 'hashPassword'],
            where: {email: email}
        });
        if (findUser) {
            const isMatch = await bcrypt.compare(password, findUser.hashPassword);
            if (isMatch) {
                req.session.userId = findUser.id;
                return res.send('Login realizado com sucesso!');
            } else {
                return res.status(401).json({message: "Senha incorreta!"});
            }
        } else {
            return res.status(404).json({message: `Usuario não encontrado com email ${email}`});
        }
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
};

const logoutUser = async (req, res, next) => {
    req.session.destroy((err) => {
        if(err) {
            return next(err);
        }
        res.clearCookie('connect.sid');
        return res.status(200).json({message: "Logout efetuado com sucesso!"});
    });
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};

