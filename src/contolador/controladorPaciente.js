const repositorioPaciente = require('../repositorio/repositorioPaciente');

async function cadastroPaciente (req,res) {
    try {
        const {nome, telefone} = req.body;
    
        const resposta = await repositorioPaciente.cadastrarPaciente(nome, telefone);
        console.log('Paciente cadastrado com sucesso.');
        res.send('Paciente cadastrado com sucesso.');

        if (resposta.status === true) {
        return res.status(400).json({ mensagem: "Não foi possivel cadastrar o paciente."})
        }

        return res.status(201).json({ mensagem: "Paciente criado com sucesso"})
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!"})   
    }
}

async function listarPaciente (req,res) {
    try {
        const resposta = await repositorioPaciente.mostrarTodosPaciente();
        console.log('Lista acessada com sucesso.');
        res.send(resposta);


        if (resposta.erro === true) {
        return res.status(400).json({ mensagem: "Não foi possivel criar a lista ."})
        }

        return res.status(201).json({ mensagem: "Lista criada com sucesso"})
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!"})   
    }
}


module.exports = {cadastroPaciente, listarPaciente}

