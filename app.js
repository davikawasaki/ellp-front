var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.route('/ongs')
//   .get(function(req, res) {
//     res.sendFile(__dirname + '/ongs.html');  
//   });

app.route('/diadascriancas')
  .get(function(req, res) {
    res.sendFile(__dirname + '/diadascriancas.html');  
  });

// app.route('/engenhariaparamulheres')
//   .get(function(req, res) {
//     res.sendFile(__dirname + '/engenhariaparamulheres.html');  
//   });

app.route('/ensinomedio')
  .get(function(req, res) {
    res.sendFile(__dirname + '/ensinomedio.html');  
  });

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(port, function() {
  console.log("App is running on port: " + port);
});

