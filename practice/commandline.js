#!/usr/bin/env node
var readline=require("readline");
// var axios=require("axios");
//interface

var reader=readline.createInterface({
    //inpute
    input:process.stdin,
    //output
    output:process.stdout,
    prompt:"cool>"
});

reader.prompt();//this is mainly used to print the cool> formate

reader.on("line",function(data){
 console.log("you type "+data);
 reader.prompt();
});

reader.on("close",function(){
  console.log("Thanks buddy for using this console")
});