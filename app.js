var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use('/',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(port, function() {
  console.log("App is running on port: " + port);
});

