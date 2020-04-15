function downloadfile(url){
    var path = "C:\\Downloads\\";
    console.log("Downloading file from : "+url);
    var arr = url.split("/");
    var n=arr.pop();
    var s = path + n;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(s);
        },3000);
        
    });
}

var promise = downloadfile("http://google.com/logo.png");
promise
    .then(function(npath){
        console.log("file saved to : "+npath);
    })
    .catch(function(err){
        console.log(err);
    });