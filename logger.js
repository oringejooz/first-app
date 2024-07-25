// let x =;
//Create and Load a module
//Login Messages module



//Node doesnt execute our code directly; always wraps our code inside each module in a function; local to each module - Module Wrapper Function

// (function (exports,require,module,__filename,__dirname){

let url ='http://mylogger.io/log';
console.log(__filename);
console.log(__dirname);

function log(message){
    //Send an HTTP Request
    console.log(message);
}
// module.exports = log;
module.exports = log;
// module.exports.url = url;
// })