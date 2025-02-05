# 31 January

Today i started by creating a task manager project, which is essentially a todo-list app but not just any todo-list app, its gonna have a complete backend with API's and database. Today i set up the routes and the controllers for the project, as well as created a new collection in Postman to organise the project and test all the routes. 

I also learned what are REST API's, It stands for Representational State Transfer API. Which is essentially just a manner in which we create APIs. Then, i learned about MongoDB and how we can use mongoose to establish a connection with our Mongo Database using the .env file. 

# 01 February

I started by creating a schema for the database that allow only strings and boolean values to be accepted. Then, i warpped the schema in a model. Atter that, i began working on my controller functions where i used async/await to create, read, update and delete methods. I tested all the methods and APIs in Postman before connecting them to the frontend.

Next, i used the Express built-in middleware .static() to add all my frontend files. The frontend was pretty simple, used axios to get access to all the methods, and just like that the app was working perfectly fine. 

Afterwards, i created a middlewares folder to handle not-found routes and improve error handling. The contollers file was a bit redundant so i created an async middleware that essentially acts as a wrapper that takes a function (in our case is the contoller functions) so we can get rid of the try/catch block from all the functions. 

Then, for better custom error handling, i created a new errors folder and file where i defined a class that extends the built-in Errors class, and a constructor that takes in a msg and a statuscode so the child can pass in the values, I then created a function that return a new CustomError with specific values. I used this function in my controllers functions, where i passed in the custom error into the CustomError wrapper inside the next method.

And with that the app was complete.