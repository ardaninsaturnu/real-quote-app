"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const io = __importStar(require("socket.io-client"));
const socketIo = io.connect('http://localhost:3000');
const quotes = document.querySelector('#quotes');
const aquote = document.querySelector('#aquote');
const qcontent = document.querySelector('#qcontent');
socketIo.on('news', function (data) {
    socketIo.emit('my other event', { my: 'data' });
});
socketIo.on('next', function (data) {
    quotes && quotes.append("<blockquote>" + data.data.quote + "</blockquote>");
});
console.log(aquote);
/*
$('document').ready(function(){
  //Connecting the socket to host and port
  var socket = io.connect('http://localhost:3000');
  //Test event
  //Users can skip it.
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
  //Test event ends here
  //Main event "next"
  socket.on('next' , function(data) {
    console.log(data);
    $('#quotes').append("<blockquote>" + data.data.quote + "</blockquote>")
  })
  //Event ends

});*/
socketIo.on('welcome', function (data) {
});
aquote === null || aquote === void 0 ? void 0 : aquote.addEventListener('click', (e) => {
    console.log(e);
    let data = qcontent.innerText;
    console.log(data);
    socketIo.emit('new', { quote: data });
    qcontent.innerHTML = '';
});
