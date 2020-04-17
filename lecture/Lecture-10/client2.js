//socket enabled
var socketclient=require("socket.io-client");
//readline;
var readline=require("readline");
//connect=>emit connect
var socket=socketclient.connect("http://localhost:3000");

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var name;
  reader.question("Enter the Name: ",
  function(user){
      name=user;
      var message=`${user} has joined`
      socket.emit("message",message);
  });

//npm init -y
//npm install socket.io socket.io-client
socket.on("message",function(message){
    console.log(message);
});
reader.on("line",function(data){
    var message=`${name}: ${data}`;
    // console.log(message);
    socket.emit("message",message);
});