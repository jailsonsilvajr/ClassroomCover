
  var express = require('express');
  var app = express();
  

  
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
  
   var seq = require('../server/src/repository/sequelize')
   
   var User = seq.User;

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  
  //retorna todos os alunos 
  app.get('/Usuarios', function (req, res) {
     
  });
    //retorna todos os alunos 
    app.post('/Usuario', function (req, res) {
      console.log(req.query); 
      User.create(req.query)
       .then(user => res.json(user));
      res.send({ "success": "O aluno foi cadastrado com sucesso" });
  });
  