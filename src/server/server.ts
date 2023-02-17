// Including the required modules
import express from 'express';
import http from 'http';
const socketIO = require('socket.io');

// Initializing the app and server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Server listening at 127.0.0.1:3000
server.listen(3000, () => {
  console.log("Server listening at: 3000");
});

app.use( express.static('public') );

app.get('/', function( req : any, res :any ){
  res.sendFile( '/public/index.html');
})

app.get('/admin', function( req : any, res :any ){
  res.sendFile( __dirname + '/public/admin.html' );
})

// Code for sockets
io.on('connection', ( socket: any ) => {
  socket.emit('welcome', { data: 'welcome' });

  socket.on('new', (data: any) => {
    console.log('About to upload Quote');
    io.sockets.emit('next', { data });
  });
});


