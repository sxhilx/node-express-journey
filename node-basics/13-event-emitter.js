const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} ID: ${id}`);
})

customEmitter.on('response', () => {
    console.log(`Other logic here`);
})

customEmitter.emit('response', 'sam', 78)

