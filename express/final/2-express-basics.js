const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.status(200).send('<h1>Home Page<h1>')
})

app.get('/about', (req,res)=>{
    res.status(200).send('<h1>About Page<h1>')
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1>Page not found<h1>')
})

app.listen(5173, () => {
    console.log("Server is listening on port 5173...");    
})

// Most used methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen