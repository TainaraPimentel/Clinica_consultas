const repositorioConsultas = require('../repositorio/repositorioConsultas');

async function cadastroConsulta (req,res) {
    try {
        const {paciente_id,especialidade,agenda} = req.body;
    
        const resposta = await repositorioConsultas.cadastrarConsulta(paciente_id,especialidade, agenda);
        console.log('Consulta cadastrada com sucesso.');
        res.send(resposta)

        if (resposta.erro === true) {
        return res.status(400).json({ mensagem: "Não foi possivel cadastrar o paciente."})
        }

        return res.status(201).json({ mensagem: "Paciente criado com sucesso"})
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!"})   
    }
}

async function listarConsultas (req,res) {
    try {
        const resposta = await repositorioConsultas.mostrarTodasConsultas();
        console.log('Lista acessada com sucesso.');

        if (resposta.erro === true) {
        return res.status(400).json({ mensagem: "Não foi possivel criar a lista ."})
        }

        return res.status(201).json({ mensagem: "Lista criada com sucesso"})
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!"})   
    }
}

async function excluirConsultas(req, res) {//ok


    try {
        const { id } = req.params;
        console.log()

        resposta = await repositorioConsultas.excluirConsulta(id)

        if (resposta.erro === true) {
            return res.status(404).json({ mensagem: "Id não encontrado. Insira um registro válido" })
        }

        return res.json({ mensagem: "Excluído com sucesso!" })

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!", erro: error.message })
    }


}


module.exports = {cadastroConsulta, listarConsultas, excluirConsultas}

