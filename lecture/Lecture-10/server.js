// /slow http connection
var http = require("http");
// server socket enabled
var socketio = require("socket.io");
// create http server
var server = http.createServer();
// socket server
var db = {};
var socketServer = socketio(server);
socketServer.on("connect", function(socket) {
  console.log(socket.id);
  socket.on("message", function(data) {
    // console.log(data);
    if (data.kind === "private") {
      socket.to(db[data.reciever]).emit("notice", data.data);
    } else {
      if (data.kind === "Joining") {
        db[data.user] = socket.id;
        var message = data.data;
      } else if (data.kind === "public") {
        var message = data.data;
      }

      socket.broadcast.emit("notice", message);
    }
    // socket.to.emit("socketid")
  });
});
server.listen(3000, function() {
  console.log("Starting server at port 3000");
});