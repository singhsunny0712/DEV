var http=require("http");
var fs=require("fs");
// var myfile=fs.readFileSync("index.html");
var json=fs.readFileSync("file.json");

json=JSON.parse(json);//convert the readable formate

var server=http.createServer(function(req,res){
    console.log(req.url);
    var  inputuser=req.url.split("/").pop();
    console.log(inputuser);
    var myuser=json.filter(function(user){
        return user["username"]==inputuser;
    });
    //header
    // res.writeHead(200,{"content-type":"text/html"})
    res.writeHead(200,{"content-type":"application/json"})

   
    res.write(JSON.stringify(myuser));
    res.end();
   
});

//use for port 
server.listen(3000,function(){
    console.log("Server has started  on port 3000");
})