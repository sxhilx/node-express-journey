const express = require('express')
const app = express();
const morgan = require('morgan');
const logger = require('./logger.js')
const authorise = require('./authorise.js')

// req => middleware => res

// middleware options - our own / express / thirdparty

// 1. Our own middleware

// app.use('/api',logger) // apply to any route after /api - 

// app.use(logger) // appy to all

// app.use([logger, authorise])

// 2. express built-in middleware
// app.use(express.static('./public'))

// 3. thirdparty middleware (have to install it)
// app.use(morgan("tiny"))



app.get('/',(req, res) => {
    res.send("Home")
})

app.get('/about', (req, res) => {
    res.send("About")
})

app.get('/api/products', (req, res) => {
    res.send("Products")
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server is listening on 5000....");
    
})