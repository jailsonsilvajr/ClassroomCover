'use strict'

function getUsuario(sequelize, DataTypes) {  
    const Usuario = sequelize.define('Usuario', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      nome: {
        type: DataTypes.STRING,
        required: true
      },
      cpf: {
        type: DataTypes.STRING,
        required: true
      },
      acesso: {
        type: DataTypes.ENUM,
        values: ['Professor', 'Aluno'] 
      },email : {
        type: DataTypes.STRING,
        required: true
      }
    });
    return Usuario;
  };

  function Usuario(){

  }

module.exports =  Usuario;
module.exports.getUsuario =  getUsuario;