var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongodb = require('mongodb');
users =[];
connections =[];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/createRoom', function (req, res) {
  //TODO Create new table to track room stats
});

app.get('/destroyRoom', function (req, res) {
  //TODO Destroy table to track room stats
});

io.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected:' + connections.length + ' users connected');

  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log('Connected:' + connections.length + ' users connected');
  });

  socket.on(123456, function(data){
    console.log('Game 123456: Player: ' + data.playerNumber + ' GameState: ' + data.playerState);
    io.emit(123456, data);
  });

  socket.on(214358, function(data){
    console.log('Game 123456: Player ' + data);
    io.emit(214358, data);
  });

  socket.on(234567, function(data){
    console.log('Game 123456: Player ' + data);
    io.emit(234567, data);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
