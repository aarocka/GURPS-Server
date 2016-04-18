var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
users =[];
connections =[];

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

  socket.on(123456, function(data){
    console.log('Game 123456: Player: ' + data.playerNumber + ' GameState: ' + data.playerState);
    io.emit(123456, "Server received a message");
  });

  socket.on(214358, function(data){
    console.log('Game 123456: Player ' + data);
  });

  socket.on(234567, function(data){
    console.log('Game 123456: Player ' + data);
  });

  socket.on('Send message', function(data){
    io.sockets.emit('new message', {msg:data});
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});