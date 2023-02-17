"use strict";
exports.__esModule = true;
exports.myFunction = void 0;
var io = require("socket.io-client");
function myFunction() {
    var socketIo = io.connect('http://localhost:3000');
    var aquote = document.querySelector('#aquote');
    var qcontent = document.querySelector('#qcontent');
    console.log(aquote);
    aquote === null || aquote === void 0 ? void 0 : aquote.addEventListener('click', function (e) {
        console.log(e, 'ardaaa');
        var data = qcontent.innerText;
        console.log(data);
        socketIo.emit('new', { quote: data });
        qcontent.innerHTML = '';
    });
}
exports.myFunction = myFunction;
