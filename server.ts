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

// Handling the default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handling the route for admin
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

// Code for sockets
io.on('connection', ( socket: any ) => {
  socket.emit('welcome', { data: 'welcome' });

  socket.on('new', (data: any) => {
    console.log('About to upload Quote');
    io.sockets.emit('next', { data });
  });
});


