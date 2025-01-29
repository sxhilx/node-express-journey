## My journey throughout learning node and express

# 23 January

Okay so today i started of basic, learned about global variables and how there is no window object in node since we are working with a server. 

Thereafter i learned how to create our own modules and export them locally to use in different files, and how we can use the require() function to basically import what was exported from different files.

And then i learned some of the built in node modules like os, fs, http and path and how we can use each of them, and some of their functions, the fs-async functons to read and write to files were pretty interesting and how we have to use nested callbacks to manage task asyncronously. 

Then i learned about the node package manager and how we can technically use it to install or rather use code written by other devs to ease our lives.

# 25 January

Today i started by learning about Event loops, and how we can offload demanding and time consuming tasks while keeping the script running. After that, i learned about Blocking code and how synchronous code can temporarily crash the whole app until the time consuming task is complete. To solve this i learnt promises and async/await. It saves a lot of time and increase the code readability since we do not have to use nesetd call backs to make it asyncronus. 

Thereafter i learnt about event emitters and how we can create an instance of the eventemiiter class to use the on() ad emit() function which are essential to handle events. There are also some built-in emits that different modules uses for eg. the "requests" event in the http module. 

After that i learned about streams and how we can send huge files in chunks to the browser using pipe() function. Finally to warp it up, I learned about how the web browser requests tp the server and how the ser responds. 

# 26 January

Today, I started off with more advanced basics of http modules to see how express can really help us cut down the code. I imported my previous navbar project to use it in this example where i created a server and used readFileSync to read all the html, js and css files, to display them on the browser using the http module. 

I also learned about status codes and MIME types and used the writeHead function to manupilate the status code and the MIME types to my needs. I then used write() function to render the content on the page. Afterwards i started with express and learned about common metods like get, post, put, all and delete. I like how we do not have to create a server and specify the status code and MIME types like in http module, express does that for us.

# 27 January

I started off by learning about the static function in Express to render all the static files (CSS, images, or JS) onto the browser. It’s pretty straightforward compared to the HTTP module—created a public folder and dumped all the files there—instead of importing all the files manually.

Then I learned basic JSON functionalities to create a basic API. While creating the API, I learned about req.params, which is used for routes, e.g., /api/products/:id, where id is just a placeholder for a specific resource. I also learned about the query object, which is essentially used for filtration, e.g., /api/products/query?type=book&author=sam.

# 29 January

Today i learned about middlewares in express, and how we can create out own middleware as well as use express provided middlewares and thirdparty middleware, a middleware a essentially just a function or a set of code that executes after the request had been made by a user and before the response is sent. 

We can use middleware to authorise users, and we can use middlewares in all of the HTTP methods by using the .use() function where we just pass in the middleware function. One interesting thing about this, we don't need to pass req and res explicitly when refrencing a middleware. An important syntax, we have to include the next param along with req and res, this param essentially just forwards the request to the next middleware or the final route.