var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World!');
    
}).listen(8080);
console.log("The server is running on port: http://127.0.0.1:8080");