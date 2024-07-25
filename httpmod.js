//HTTP MOdule = Used for creating networking applications
//Eg: A webserver that listens for http requests at a given port

const http = require('http');
const server = http.createServer(function(req,res){
    if(req.url ==='/'){
        res.write('Hello WOrld')
        res.end();
    }
});//This server is an event emitter
server.on('connection',(socket)=>{
    console.log("New Connection");
});
server.listen(3000);

console.log('Listening on Port 3000....');