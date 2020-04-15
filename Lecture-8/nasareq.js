var https=require("https");
var fs=require("fs");
var Stream=require("stream").Transform;
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const options={
    host:"api.nasa.gov",
    port:443,//tcp port
    path:"/planetary/apod?api_key=G90nRr80vzvOa2VXFTyzmNMvElX5pcSoGebl7kob&date=2017-02-02",
    method:"GET"

};

var request=https.request(options,function(res){
    //data
  
    var wholedata="";
    res.on("data",function(chunk){

     wholedata+=chunk;
    })
    //end
    res.on("end",function(){
    var Obj=JSON.parse(wholedata);
    console.log(typeof Obj)
    var url=Obj["url"];
      var imgreq=https.request(url,function(res){
         var data=new Stream();
         res.on("data",function(chunk){
             data.push(chunk);
         });
         res.on("end",function(){
            var path="files/"+"nasareq.png";
            fs.writeFileSync(path,data.read());
         });
      });
      imgreq.end();
     
    });
});

request.end();




