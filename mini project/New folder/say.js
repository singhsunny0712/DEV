let say=require('say');
var readline=require("readline");


// say.speak("hello");



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
    // console.log(command);

       say.speak(data);
      
       reader.prompt();
    if(command=="exit"){
        reader.close();   
    }
    else{
        console.log("Wrong Command:( ")
    }
    
});
reader.on("close",function(){
    console.log("see you later")
});