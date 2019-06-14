
  var express = require('express');
  var Sequelize = require('sequelize-values')();
  var app = express();
  var bodyParser = require('body-parser')
  const uuidv1 = require('uuid/v1');
  
  var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(allowCrossDomain);
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
  var seq = require('../server/src/repository/sequelize')
  var User = seq.User;
  var Questionario = seq.Questionario;
  var Questao = seq.Questao;


  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  

  app.get('/Usuarios', function (req, res) {
    User.findAll().then(users => res.json(users))
  });
  

  app.post('/Usuarios', function (req, res) {
      User.create(req.body)
       .then(user => res.json(user));
      res.send({ "success": "O aluno foi cadastrado com sucesso" });
  });
  

  app.get('/Questionarios', function (req, res) {
    User.findAll().then(users => res.json(users))
  });
  

  function inserirQuestoes(Questionarioid,questoes){
    questoes.forEach(function(element) {
      element.QuestionarioId = Questionarioid;
      element.id = uuidv1();
    }); 

    questoes.forEach(function(el)
    {
      Questao.create(el)      
    });
    
  }

  

  app.post('/Questionarios', function (req, res) { 
    Questionario.create(req.body)
    .then(user => inserirQuestoes(user.id,req.body.questoes));    
    res.send({ "success": "O aluno foi cadastrado com sucesso" });
  });
  


  
  