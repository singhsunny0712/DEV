var readline=require("readline");
var mk=require("./filefun.js")
var ip=require("./ipconfi.js")
//interface

var reader=readline.createInterface({
    //inpute
    input:process.stdin,
    //output
    output:process.stdout,
    prompt:"mycli>"
});

reader.prompt();


reader.on("line",function(data){
    // console.log("Did you said "+data);
    var command =data.split(" ")[0];
    var parameter=data.split(" ")[1];
    console.log(command);
    //myipconfig
    if(command=="myipconfig"){
        ip();
        reader.prompt();
    }else if(command=="mymkdir" && parameter!=undefined){
       mk(parameter);
       reader.prompt();
    }else if(command=="exit"){
        reader.close();   
    }
    else{
        console.log("Wrong Command:( ")
    }
    
});
reader.on("close",function(){
    console.log("see you later")
});