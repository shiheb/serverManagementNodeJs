const EventEmitter = require('events');
const uuid = require('uuid');
const uuid5 = require('uuid/v5')

class Logger extends EventEmitter{

    log(msg){
        // call event
        this.emit('message', { id : uuid5.URL, msg});
    }

}


module.exports = Logger;