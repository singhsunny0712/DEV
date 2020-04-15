var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type": "text/plane"});
    var file=fs.readFileSync("big.txt");
    res.write(file);
    res.end();
});

server.listen(3000,function(){
    console.log("Server is listening at port 3000");
});