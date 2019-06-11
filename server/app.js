var express = require('express');
var app = express();

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco'
  });

  var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

  app.use(allowCrossDomain);
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  
  //retorna todos os alunos 
  app.get('/Alunos', function (req, res) {
      prod = [];
      sequelize.query("SELECT * FROM produto").then(myTableRows => {
          res.send(myTableRows);
        })
  });
    //retorna todos os alunos 
    app.post('/Aluno', function (req, res) {
      console.log(req);
      res.send({ "success": "O aluno foi cadastrado com sucesso" });
  });
  