const express = require("express");
const rota = express.Router();
const controladorPaciente = require('../contolador/controladorPaciente');

rota.get("/lista/paciente", controladorPaciente.listarPaciente);
rota.post("/cadastrar/paciente", controladorPaciente.cadastroPaciente);


module.exports = rota;