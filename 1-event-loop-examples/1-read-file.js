const {readFile} = require('fs')

console.log("Strating the first task");

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed the tsak');    
})

console.log('starting the next tsk');
