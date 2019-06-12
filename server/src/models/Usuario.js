'use strict'

function getUsuario(sequelize, DataTypes) {  
    const Usuario = sequelize.define('Usuario', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        required: true
      },
      cpf: {
        type: DataTypes.STRING,
        required: true
      },
      role: {
        type: DataTypes.ENUM,
        values: ['Professor', 'Aluno']
  
      }
    });
    return Usuario;
  };

  function Usuario(){

  }

module.exports =  Usuario;
module.exports.getUsuario =  getUsuario;