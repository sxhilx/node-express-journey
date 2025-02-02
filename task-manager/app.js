const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorhandler')
// middleware
app.use(express.static('./public'))
app.use(express.json()) // i will got get the data in req.body if i dont use this

//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound) 
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}`))

    } catch (error) {
        console.log(error);
    }
}

start()

