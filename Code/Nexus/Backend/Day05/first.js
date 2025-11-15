const http = require('http');
// console.log(http);

const server = http.createServer((req,res)=>{
    console.log(res);
})

server.listen(4000, ()=>{
    console.log("server listening on port number 4040");
})