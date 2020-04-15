// socket enabled
var socketclient = require("socket.io-client");
// connect=> emit connect
var readline = require("readline");
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var socket = socketclient.connect("http://localhost:3000");
// name=> log
// npm init -y
// npm install socket.io socket.io-client
var username;
reader.question("Enter your Name: ", function(user) {
  // console.log(data);
  var message = {};
  username = user;
  message.data = `${user} has joined`;
  message.user = username;
  message.kind = "Joining";
  socket.emit("message", message);
});

socket.on("notice", function(message) {
  console.log(message);
});
// /msg  naman message
reader.on("line", function(data) {
  // public
  // private
  // private naman hello
// hello
  var sarr = data.split(" ");
  var kind = sarr[0];
  var message = {};
  if (kind === "private") {
    var reciever = sarr[1];
    message.data = `${username}:${sarr.slice(2).join(" ")}`;
    message.kind = "private";
    message.reciever = reciever;
  } else {
    message.data = `${username} :${data}`;
    message.kind = "public";
  }

  socket.emit("message", message);
});