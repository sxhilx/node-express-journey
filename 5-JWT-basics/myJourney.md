# 05 February

I set the project foundation yesterday, including setting up the routes, controllers, middlewares, and the front end. Today, I worked on the logic part.

I used JWT to send an authorized token. When the user logs in, the login function creates a JSON Web Token for authorization. Its syntax is as follows: jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'}), Here, jwt is a variable assigned to the jsonwebtoken module. The .sign() function creates the token, {id, username} is the payload (the data being stored in the token), followed by the secret key I defined in my .env file. Lastly, an object specifies the token's lifespan.

Next, in my Dashboard function, I retrieve the authorization object from req.headers to check if the token is present. If it is, jwt.verify(token, secret key) verifies the token against the secret key and returns the decoded payload. I then moved the entire token verification process into a middleware file (auth.js). The syntax for using middleware before a specific route is as follows:
.get(authMiddleware, dashboard).

After that, I created two more error files to handle specific errors (BadRequest and Unauthorized). In these files, I used the http-status-codes module to specify status codes instead of hardcoding them. I then refactored all instances where CustomAPIError class was being used and replaced them with the appropriate error handlers.
