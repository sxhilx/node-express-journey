console.log('first');

setTimeout(() => {
    console.log('second'); // gets offloaded
}, 0)

console.log('Third');
