var http=require("http");

var server=http.createServer(function(req,res){
    console.log(req.url);
    //header
    res.writeHead(200,{"content-type":"text/plain"})
    if(req.url=="/about"){
        res.write("you are at about page ");
        res.end("THE END")
    }else if(req.url=="/" || req.url==""){
        res.end("You are at home page");
    }else{
        res.end("Error 404 page not found");
    }
   
});

//use for port 
server.listen(3000,function(){
    console.log("Server has started  on port 3000");
})