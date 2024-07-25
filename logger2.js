//Extending Event Emitter

const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log(message){
        console.log(message);
        //Raise an Event
        this.emit('messageLogged',{id:1,url:'url'});
    }
    
}





module.exports = Logger;