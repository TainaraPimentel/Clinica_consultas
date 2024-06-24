const Consultas = require ('../modelo/modeloConsultas');

async function cadastrarConsulta (paciente_id, especialidade, agenda){
    try {
        const consulta = await Consultas.create({ 
            paciente_id: paciente_id,
            especialidade: especialidade,
            agenda: agenda,

        });
    } catch (error) {
        return {
            status: false,
            erro: error.errors[0].message
        }
    }
}

async function mostrarTodasConsultas (){
    try {
        const consulta = await Consultas.findAll()
        return consulta

    } catch (error) {
        return {
            status: false,
            erro: error.error[0].message
        }
    }
}

async function excluirConsulta(id) {//ok
    try {
       
        const consulta = await Consultas.destroy({
            where: {
                id: id
            }
        })

        if (consulta === 1) { 
            return { status: true }
        }

        return { status: false }

    } catch (error) {
        return { status: false }
    }
}

module.exports = {cadastrarConsulta, mostrarTodasConsultas, excluirConsulta}
