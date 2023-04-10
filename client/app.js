const socket = new WebSocket('ws://localhost:8080');

const input = document.querySelector('#msg');
const button = document.querySelector('button');

socket.onmessage = ({data}) => {
    console.log(`Message from server [${data}]`);
}

button.addEventListener('click', event => {
    event.preventDefault();
    const value = input.value;
    socket.send(value);
})