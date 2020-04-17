var http=require("http");
var fs=require("fs");
var reader=fs.createReadStream("big.txt");

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type": "text/plane"});
    // var file=fs.readFileSync("big.txt");
    reader.pipe(res);
    // res.write(file);
    // res.end();
    console.log(Math.ceil(process.memoryUsage().external/1024)+"kb");
});

server.listen(3000,function(){
    console.log("Server is listening at port 3000");
});