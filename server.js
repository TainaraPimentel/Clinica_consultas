const express = require('express');
const server = express();
const database = require('./config/database.js');
const bodyParser = require ('body-parser')
const cors = require("cors")
const Paciente = require ('./src/modelo/modeloPaciente.js');
const Consulta = require ('./src/modelo/modeloConsultas.js');
const rotaPaciente = require ('./src/rotas/rotaPaciente.js');
const rotaConsulta = require ('./src/rotas/rotaConsulta.js')

server.use(bodyParser.json());
server.use(express.json())

server.get('/', (req,res) => {
    res.send('Página Inicial')
    
});

server.use('/', rotaPaciente);
server.use('/', rotaConsulta);

server.listen(6000, async () => {
    console.log('servidor iniciado na porta 5000: http://localhost:5000');

    try {
        await database.sync();
        console.log("Models sincronizados com o banco de dados com sucesso...")
    } catch (error) {
        console.log("Não foi possível sincronizar models com o banco de dados...");
    }
});

