import * as io from 'socket.io-client';
const socketIo  = io.connect('http://localhost:3000' );
const quotes : HTMLElement | null = document.querySelector('#quotes');

socketIo.on( 'news', function ( data: any ) {
  socketIo.emit( 'my other event', {my: 'data' } )
});

socketIo.on( 'next', function ( data: any ){
  quotes && quotes.append("<blockquote>" + data.data.quote + "</blockquote>")
})


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
