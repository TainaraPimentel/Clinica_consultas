const Pacientes = require ('../modelo/modeloPaciente.js');

async function cadastrarPaciente (nome, telefone){
    try {
        const paciente = await Pacientes.create({ 
            nome: nome,
            telefone: telefone,

        });
    } catch (error) {
        return {
            status: false,
            erro: error.errors[0].message
        }
    }
}

async function mostrarTodosPaciente (nome, telefone){
    try {
        const paciente = await Pacientes.findAll()
        return paciente

    } catch (error) {
        return {
            status: false,
            erro: error.error[0].message
        }
    }
}

module.exports = {cadastrarPaciente, mostrarTodosPaciente}
