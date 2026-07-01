require('dotenv').config();

const express = require('express');
const app = express();

const session = require("express-session");
const store = new session.MemoryStore();
const imagesRouter = require('./routes/images');
const authRouter = require('./routes/auth');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.set('trust proxy', 1);

//Sessão Express
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized: false,
        store,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 24 * 60 * 60 * 1000
        }
    }));

//Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Rotas de Imagens e Autenticação
app.use('/images', imagesRouter);
app.use('/auth', authRouter);

app.get('/', (req, res)=>{
    res.send('Bem vindo ao concurso de fotos para legenda')
});

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
});