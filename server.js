const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello SEI!</h1>');
});

app.get('/home', function(req, res){
  res.send('<h1>Home Page</h1>');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});