const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Home page");
        return;
    }
    if(req.url === '/about'){
        // BLOCKING CODE!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }            
        } // so this for loop is syncronous meaning it will block all the other process or the rest of the script until the for loop is complete so that why we should use async code


        res.end("About Page");
        return;
    }
    res.end("Error Page");
    return
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...')    
})