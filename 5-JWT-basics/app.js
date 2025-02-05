require('dotenv').config(); // Load environment variables from .env
require('express-async-errors'); // Enable async error handling for Express

const express = require('express')
const app = express()

const mainRouter = require('./routes/main')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter )

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
