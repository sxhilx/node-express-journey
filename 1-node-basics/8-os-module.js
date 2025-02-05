const os = require('os')

// info about the user
const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds
console.log(`The systme uptime is ${os.uptime()}s`);


// Data about the OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMeme: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);

