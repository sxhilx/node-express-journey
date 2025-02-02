# 02 February

Started and completed this project on the same day! In this project, I created an e-commerce store API.

First, I created my app.js file where I required all the necessary modules like Express and dotenv, as well as all the custom middleware I built in my previous task-manager project—like the notFound handler and the custom error handler. But this time, instead of creating a custom error handler class, I used the Express package express-async-errors, which made my life so much easier. Then, I connected my database and created the routes and controller files.

Next, I created a models folder where I defined a schema for all the fields of the API. I learned an interesting thing—enums, where you can specify a set of allowed values for a field. After that, I exported the model, imported it into my app.js, and began working on my controller functions. I created two functions: one static function to understand the logic by passing in hard-coded values, and one actual function to handle everything dynamically.

I learned about different Mongoose methods like find, select, skip, and sort, and implemented them in the API. The hardest part was probably filtering numeric values and converting human-friendly signs (> and <) into MongoDB syntax, but I eventually managed to understand and do it. And with that, my API was completed.