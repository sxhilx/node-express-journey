const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Serve listening on post : 5000');
})