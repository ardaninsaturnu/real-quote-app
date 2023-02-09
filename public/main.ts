import * as io from 'socket.io-client';
const socketIo  = io.connect('http://localhost:3000' );
const quotes : HTMLElement | null = document.querySelector('#quotes');

socketIo.on( 'news', function ( data: any ) {
  socketIo.emit( 'my other event', {my: 'data' } )
});

socketIo.on( 'next', function ( data: any ){
  quotes && quotes.append("<blockquote>" + data.data.quote + "</blockquote>")
})
