let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
} 

const createPerson = (req, res) => {
    const {name} = req.body;
    const {id} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "Please provide name value"})
    }
    res.status(201).json({success: true, person:name, id:id})
}

const createPersonPostman = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess: false, msg: "Please provide name"})
    }
    res.status(201).json({success: true, data: [...people, name]})
}

const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person){
        return res.status(400).json({sucess: false, msg: `No person with id ${req.params.id}`})
    }

    const newPerson = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({success:true, data: newPerson})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}