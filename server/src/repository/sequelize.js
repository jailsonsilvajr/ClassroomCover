var Sequelize = require('sequelize-values')();
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco'
  });

const UserModel = require('../models/Usuario');
const QuestaoModel =  require('../models/Questao');
const QuestionarioModel = require('../models/Questionario');

const User = UserModel.getUsuario(sequelize, Sequelize);
const Questao = QuestaoModel.getQuestao(sequelize,Sequelize);
const Questionario = QuestionarioModel.getQuestionario(sequelize,Sequelize);


// //apaga todo o banco e cria todas as tabelas
// sequelize.sync({ force: true })
//     .then(() => {
//         console.log(`Database & tables created!`)
//     })

module.exports = {
  User
  ,Questao
  ,Questionario
}