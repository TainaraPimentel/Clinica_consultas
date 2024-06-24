
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('clinica_consultas', 'root', '10923822', {dialect: 'mysql', host: 'localhost'});
 

sequelize.authenticate()
.then(() => {
    console.log('Conexão com MySql estabelecida com sucesso...')
})
.catch(error => {
    console.error('Não foi possível se conectar com o banco de dados MySql...')
});

module.exports = sequelize;