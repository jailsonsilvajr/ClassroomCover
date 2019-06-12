const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco'
  });

const UserModel = require('../models/Usuario');
const User = UserModel.getUsuario(sequelize, Sequelize)

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
  User
}