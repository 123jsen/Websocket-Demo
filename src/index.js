const WebSocket = require('ws');
const server = new WebSocket.Server({ port: '8080' });

server.on('connection', socket => {
    socket.on('message', message => {
        console.log(`Received message: [${message}]`);
        socket.send(`You sent: ${message}`);
    }); 
});