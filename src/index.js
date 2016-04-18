var express = require('express');
var app = express();

app.get('/createGame', function (req, res) {
  //var userQueryString = req.query.message;
  //res.send(userQueryString);
  //create new row
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
