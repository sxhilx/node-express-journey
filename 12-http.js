const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`Welcome to out home page`);
        return;
    }
    if(req.url === '/about'){
        res.end("This is our about page");
        return;
    }
    res.end(`
     <h1>Oops!</h1>
     <p>Cant find the page</p>
     <a href='/'>Return Home</a>
    `)
    return;
})

server.listen(5000)