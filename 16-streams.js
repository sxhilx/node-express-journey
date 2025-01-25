const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 120000, encoding: 'utf-8'});

// default 64kb
// last buffer - remainder
// highWaterMark - Control size
// const strem = createReadStream('./content/big.txt', {hihWaterMark: 90000} )
// const strem = createReadStream('./content/big.txt', {encoding: utf-8} )


stream.on(`data`, (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);    
})