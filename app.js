// const logger = require('./logger');
// console.log(logger);

// logger("Hello Swarnima")

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// sayHello("Swarnima");
//console.log(window);//console.log() console is a global object, setTimeout(), clearTimeout(), setInterval() clearInterval()

/*
ReferenceError: window is not defined
No window or Document Objects - part of RTE with browsers

Node Module System: os fs events http

global object
*/

// global.console.log("Heloo");

// let msg = 'Jennie';
//Variables not part of global object their scope is only our file


//Modules




//LOading module
//Path Module parse method
// const path = require('path');
// let pathObj = path.parse(__filename);
// console.log(pathObj)

//OS MOdules

// const os = require('os');
// let totalMem = os.totalmem();
// let freeMem = os.freemem();

// console.log(`Total Memory ${totalMem}`);
// console.log(`Free Memory ${freeMem}`);

// const logObj = require('./logger');
// // console.log(logObj.logger);
// // console.log(logObj.url);

// logObj("Swarnima");

//Files system MOdule

// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files)

//[ 'app.js', 'logger.js' ] - o/p

// fs.readdir('./',function(err,files){
//     if(err) console.log('Error',err);
//     else console.log('Result:',files);
// })


//Events MOdule
//Event - Signal SOmthing happened 



//-Raise an event; produce signal
//Event Arguments

