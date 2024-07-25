//const EventEmitter = require('events');

//EventEmitter class
//const emitter = new EventEmitter();//Object of EventEmitter class

//Register a Listener


const Logger = require('./logger2');
const logger = new Logger();

logger.on('messageLogged',(e)=>{//(Name of event,Callback Function or the Listener)
    console.log("Listener Called",e);
});

logger.log("Hi Swarnima");