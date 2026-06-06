const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Bem vindo ao concurso de fotos para legenda')
});

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
});