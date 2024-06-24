
const { Sequelize } = require('sequelize');
const sequelize = require ("../../config/database");
const Pacientes = require ('./modeloPaciente')

const Consultas = sequelize.define(
  'Consultas',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        paciente_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Pacientes,
                key: 'id',
            }
        },
        especialidade: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Campo não pode estar vazio' }
            }
        },
        agenda: {
            type: Sequelize.DATE(6),
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Campo não pode estar vazio' }
            }
        },
    },
    {
        tableName: 'Consultas' 
    },
);

Consultas.belongsTo(Pacientes, { foreignKey: 'paciente_id', as: 'Pacientes' });

console.log(Consultas === sequelize.models.Consultas); 

module.exports = Consultas;

