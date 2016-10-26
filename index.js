var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
	// res.send("<h1>Hello, I'm a chat app (not yet)");
	// Sending the file to the GET request
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log("new user connected");

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});

	socket.on('chat message', function(msg){
		console.log("message:" + msg);
		io.emit('chat message', msg);
	})
});

http.listen(3000, function(){
	console.log("listening on 3000");
});