var readline=require("readline");
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
    console.log("Did you said "+data);
    reader.prompt();
});
reader.on("close",function(){
    console.log("Thankyou for using our cli")
});