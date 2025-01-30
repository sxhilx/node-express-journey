const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())


app.get('/api/people', (req, res) => {
    res.status(200).json({sucess:true, data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    const {id} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "Please provide name value"})
    }
    res.status(201).json({success: true, person:name, id:id})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess: false, msg: "Please provide name"})
    }
    res.status(201).json({success: true, data: [...people, name]})
})


app.post('/login', (req,res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please provide credentials");
    
})

app.put('/api/people/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res.status(400).json({sucess: false, msg: `No person with id ${id}`})
    }
    const newPerson = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPerson})
}) 

app.delete('/api/people/:id', (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person){
        return res.status(400).json({sucess: false, msg: `No person with id ${req.params.id}`})
    }

    const newPerson = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({success:true, data: newPerson})
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");  
})