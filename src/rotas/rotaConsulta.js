const express = require("express");
const rota = express.Router();
const controladorConsultas = require('../contolador/controladorConsultas');

rota.get("/lista/consulta", controladorConsultas.listarConsultas);
rota.post("/cadastrar/consulta", controladorConsultas.cadastroConsulta);
rota.delete("/deletar/consulta", controladorConsultas.excluirConsultas);


module.exports = rota;