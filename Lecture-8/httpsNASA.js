var https=require("https");
var fs=require("fs");
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const options={
    host:"api.nasa.gov",
    port:443,//tcp port
    path:"/planetary/apod?api_key=G90nRr80vzvOa2VXFTyzmNMvElX5pcSoGebl7kob",
    method:"GET"

};

var request=https.request(options,function(res){
    //data
    var count=0;
    var wholedata="";
    res.on("data",function(chunk){

     wholedata+=chunk;
     count++;
    //  console.log(""+ chunk);//for string format
    })
    //end
    res.on("end",function(){
    //  console.log(count);
    var JSONObj=JSON.parse(wholedata);
    console.log(JSONObj);
     var path="files/"+"nasa.txt";
     fs.writeFileSync(path,JSON.stringify(JSONObj));
    //  console.log(typeof wholedata);
    })
})

request.end();