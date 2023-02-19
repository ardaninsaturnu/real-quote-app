"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Including the required modules
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socketIO = require('socket.io');
// Initializing the app and server
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = socketIO(server);
// Server listening at 127.0.0.1:3000
server.listen(3000, () => {
    console.log("Server listening at: 3000");
});
app.use(express_1.default.static('public'));
app.get('/', function (req, res) {
    res.sendFile('/client/index.html');
});
app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/client/admin.html');
});
// Code for sockets
io.on('connection', (socket) => {
    socket.emit('welcome', { data: 'welcome' });
    socket.on('new', (data) => {
        console.log('About to upload Quote');
        io.sockets.emit('next', { data });
    });
});
