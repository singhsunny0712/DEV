
module.exports=function(input){
var os=require("os")
var fs=require("fs");

if(input!=undefined){
    if(fs.existsSync(input)==false){
        fs.mkdirSync(input);
    }else{
        console.log("Folder already exits")
    }
}else{
    console.log("please enter any input");
}

};