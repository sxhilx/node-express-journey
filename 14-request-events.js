const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })


// Using Event Emitter API
const server = http.createServer();
// server emits, emails request  event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome');
    return;
})

server.listen(5000)