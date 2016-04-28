var app = require('express')();
var http = require('http').Server(app);
var port = process.env.HTTP_PORT || 3000;
var currentGames = [];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/createGame', function (req,res) {
  var query = req.query;
  var gamepin = Math.floor((Math.random() * 999999) + 111111);
  //TODO actually check if currentGames actually contains gamepin and generate a new one if there is
  currentGames.push(gamepin);
  res.json(gamepin);
  //TODO spawn docker contianer
});

app.get('/endGame',function (req,res) {
  var query = req.query;
  //TODO Destroy docker container where container name == query == gamepin
  //TODO Remove the gamepin from currentGames
});

http.listen(port, function(){
  console.log('listening on *:3000');
});

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
