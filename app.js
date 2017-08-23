var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.route('/about')
  .get(function(req, res) {
    console.log('Loaded about page');
    res.sendFile(__dirname + '/about.html');  
  });

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(port, function() {
  console.log("App is running on port: " + port);
});

