//var global = NodeJS.Global;

console.log('hello, little turtle!');

global.luckyNumber = '7';
console.log(global.luckyNumber);

console.log(process.platform);
console.log(process.env.USER);

console.log(process.exit);

//listening event, and when it occurs node will run callback
process.on('exit', function() {
    //event: 'exit', callback: function
});
//you can create your own event: from built-in Event Module
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();//custom eventEmitter by instantiating a class
eventEmitter.on('lunch', () => {
    console.log('yummi!...')
})
eventEmitter.emit('lunch');//triggers callback function to run
eventEmitter.emit('lunch');