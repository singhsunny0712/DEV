module.exports=function(){

var https=require("https");
var fs=require("fs");
//hhtps://jsonplaceholder.typicode.com/
const options={
    host:"jsonplaceholder.typicode.com",
    port:443,//tcp port
    path:"/users",
    methode:"GET"

};

var request=https.request(options,function(res){
    //data
    var count=0;
    var wholedata="";
    res.on("data",function(chunk){

     wholedata+=chunk;
     count++;
    //  console.log("I am here");
    //  console.log(""+ chunk);//for string format
    })
    //end
    res.on("end",function(){
    //  console.log(count);
     console.log(typeof wholedata);
     var JSONObj=JSON.parse(wholedata);
     
     console.log(JSONObj);
    })
})

request.end();

};