// npm - global command, comes with node
// mpm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (linux, mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

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