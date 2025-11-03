const http=require("http");

const server =http.createServer((req,res)=> {
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Hello World");
});

server.listen(3000,()=>{
    console.log("server running at http://localhost:3000/");
});