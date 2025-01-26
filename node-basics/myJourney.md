## My journey throught learning node

# 23 January

Okay so today i started of basic, learned about global variables and how there is no window object in node since we are working with a server. 

Thereafter i learned how to create our own modules and export them locally to use in different files, and how we can use the require() function to basically import what was exported from different files.

And then i learned some of the built in node modules like os, fs, http and path and how we can use each of them, and some of their functions, the fs-async functons to read and write to files were pretty interesting and how we have to use nested callbacks to manage task asyncronously. 

Then i learned about the node package manager and how we can technically use it to install or rather use code written by other devs to ease our lives.

# 25 January

Today i started by learning about Event loops, and how we can offload demanding and time consuming tasks while keeping the script running. After that, i learned about Blocking code and how synchronous code can temporarily crash the whole app until the time consuming task is complete. To solve this i learnt promises and async/await. It saves a lot of time and increase the code readability since we do not have to use nesetd call backs to make it asyncronus. 

Thereafter i learnt about event emitters and how we can create an instance of the eventemiiter class to use the on() ad emit() function which are essential to handle events. There are also some built-in emits that different modules uses for eg. the "requests" event in the http module. 

After that i learned about streams and how we can send huge files in chunks to the browser using pipe() function. Finally to warp it up, I learned about how the web browser requests tp the server and how the ser responds. 