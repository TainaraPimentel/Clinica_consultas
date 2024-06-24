
const { Sequelize } = require('sequelize');
const sequelize = require ("../../config/database")

const Pacientes = sequelize.define(
  'Pacientes',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        /*consulta_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Consultas,
                key: 'id',
            }
        },*/
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Campo não pode estar vazio' }
            }
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Campo não pode estar vazio' }
            }
        },
    },
  {
    tableName: 'Pacientes' 
  },
);

/*Pacientes.belongsTo(Consultas, { foreignKey: 'consulta_id', as: 'Consultas' });
*/

Pacientes.sync();

console.log(Pacientes === sequelize.models.Pacientes); 

module.exports = Pacientes;

