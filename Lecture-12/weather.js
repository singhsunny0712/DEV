#!/usr/bin/env node
var readline=require("readline");
var axios=require("axios");
//interface

var reader=readline.createInterface({
    //inpute
    input:process.stdin,
    //output
    output:process.stdout,
    prompt:"cool>"
});

async function helper(place,data){
    var response=await axios.get("https://www.metaweather.com/api/location/search/?query="+place);
    var woeid=response["data"][0]["woeid"];
    var weather=await axios.get(`https://www.metaweather.com/api/location/`${woeid});
    if(data=="today"){

       
        console.log(response["data"])
    }else{
        // var response

        // console.log(response["data"])
        var response=await axios.get("https://www.metaweather.com/api/location/"+response["data"][0]["woeid"]);
        console.log(response["data"])
    }

}
reader.prompt();


reader.on("line",function(data){
   var arr=data.split(" ");
  
       var data=arr[0];
       var place=arr[1];
      if(data==undefined|| place==undefined){
        
          console.log("Invalid command");
     }else{
         helper(place,data);
     }
   
   
    reader.prompt();
});
reader.on("close",function(){
    console.log("Thankyou for using our cli")
});