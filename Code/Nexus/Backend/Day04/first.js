const http = require('http');

const server = http.createServer((req,res)=>{
        if(req.url === "/"){
            res.end("Hello World!");
        }else if(req.url === "/contact"){
            res.end("This is contact page");
        } else if(req.url === "/about"){
            res.end("This is about page");
        } else{
            res.end("This is error");
        }
})

server.listen(4000, ()=>{
    console.log("server listening on port number 4040");
})