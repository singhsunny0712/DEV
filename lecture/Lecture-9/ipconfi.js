
var os=require("os");
module.exports=function(){
    var networkInfo=os.networkInterfaces();
    console.log(networkInfo);
}