import * as io from 'socket.io-client';
const socketIo  = io.connect('http://localhost:3000' );
const quotes : HTMLElement | null = document.querySelector('#quotes');
const aquote : HTMLElement | null = document.querySelector('#aquote');
const qcontent : HTMLElement | null = document.querySelector('#qcontent');

socketIo.on( 'news', function ( data: any ) {
  socketIo.emit( 'my other event', {my: 'data' } )
});

socketIo.on( 'next', function ( data: any ){
  quotes && quotes.append("<blockquote>" + data.data.quote + "</blockquote>")
})

console.log(aquote)

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

aquote?.addEventListener( 'click', (e : MouseEvent ) => {
  console.log(e)
  let data = qcontent!.innerText;
  console.log(data)

  socketIo.emit('new', {quote: data});
  qcontent!.innerHTML = '';
})
