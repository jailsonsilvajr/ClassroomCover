'use strict'

function getQuestao(sequelize, DataTypes) {  
    const Questao = sequelize.define('Questao', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      texto: {
        type: DataTypes.STRING,
        required: true
      },
      QuestionarioId: {
        type: DataTypes.STRING,
        required: true
      }
    });
    return Questao;
  };

  function Questao(){

  }

module.exports =  Questao;
module.exports.getQuestao =  getQuestao;