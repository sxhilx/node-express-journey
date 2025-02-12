# 09 February

Today, I set up the project base, created routes and controller functions, and started working on the register controller function. I also set up the Mongoose model and used the bcrypt library to hash the password before storing it in the database. To achieve this, I implemented Mongoose pre-middleware, which runs before saving the document and ensures the password is securely hashed.

# 12 February

Today, I started by implementing JWT token generation for users who register with the app. I used RandomKeygen to generate a random 256-bit secret key for my JWT. While working on this, I learned about Mongoose instance methods, which allow me to create a function within my model to generate a JWT token. Now, I can call this function directly inside my register function to generate tokens efficiently.