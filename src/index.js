var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
users =[];
connections =[];
var GameInfo = {
  "gameID": process.env.GAMEID || 123456,
  "turn":1,
  "players" :[]
}
var blankPlayer = {
  "playerNumber":0,
	"nicname":"",
  "posX":0,
  "posY":0,
  "maxHealth":100,
  "health":100
};
var port = process.env.HTTP_PORT || 3000;



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected:' + connections.length + ' users connected');

  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log('Connected:' + connections.length + ' users connected');
  });
  socket.on('join',function(data){
    //Create player based on nicname provided
    var tempPlayer = blankPlayer;
    tempPlayer.nicname = data;

    //assign player number
    if (GameInfo.players.length == 0) {
      tempPlayer.playerNumber=1
    } else {
      tempPlayer.playerNumber = GameInfo.players.length + 1;
    }

    //set player position based on player number
    switch (tempPlayer.playerNumber) {
      case 1:
        tempPlayer.posY = 0;
        tempPlayer.posX = 0;
        break;
      case 2:
        tempPlayer.posY = 20;
        tempPlayer.posX = 20;
        break;
      case 3:
        tempPlayer.posY = 20;
        tempPlayer.posX = 0;
        break;
      case 4:
        tempPlayer.posY = 0;
        tempPlayer.posX = 20;
        break;
      default:
        tempPlayer.posY = 0;
        tempPlayer.posX = 0;
        break;
    }
    GameInfo.players.push(tempPlayer);
  });

  socket.on(123456, function(data){
    console.log('Game 123456: Player: ' + data.playerNumber + ' GameState: ' + data.playerState);
    io.emit(123456, data);
  });

});

http.listen(port, function(){
  console.log('listening on *:3000');
});
