'use strict'

function getQuestionario(sequelize, DataTypes) {  
    const Questionario = sequelize.define('Questionario', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      titulo: {
        type: DataTypes.STRING,
        required: true
      }
    });
    return Questionario;
  };

  function Questionario(){

  }

module.exports =  Questionario;
module.exports.getQuestionario =  getQuestionario;