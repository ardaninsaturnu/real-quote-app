import * as io from "socket.io-client";

export function myFunction() {
  const socketIo  = io.connect('http://localhost:3000' );

    const aquote : HTMLElement | null = document.querySelector('#aquote');
    const qcontent : HTMLElement | null = document.querySelector('#qcontent');

    console.log(aquote)

    aquote?.addEventListener( 'click', (e : MouseEvent ) => {
      console.log(e,'ardaaa')
      let data = qcontent!.innerText;
      console.log(data)

      socketIo.emit('new', {quote: data});
      qcontent!.innerHTML = '';
    })

}
