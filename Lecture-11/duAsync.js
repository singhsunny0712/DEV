//download uploading
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
    })
    
}


function compressfile(filepath){
    console.log("we are compressing file : "+filepath);
    var arr=filepath.split(".");
    var a=arr.pop();
    var s=arr+"-resized."+a;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(s);
        },2000);
    })
    
}
function uploadfile(diskpath){
    var uploadurl = "http://pep/uploads";
    console.log("uploading to : "+uploadurl);
    var arr = diskpath.split("\\");
    var n=arr.pop();
    var s = uploadurl +"/"+ n;
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(s);
        },3000);
    })
    
}


var dpromise = downloadfile("http://google.com/logo.png");
dpromise.then(function(npath){
    console.log("file saved to : "+npath);
    var cpromise = compressfile(npath);
    return cpromise; 
}).then(function (nfilepath){
    console.log("file compressed to : "+nfilepath);
    var upromise = uploadfile(nfilepath);
    return upromise;
}).then(function (ndiskpath){
    console.log("file successfully uploaded to : "+ndiskpath);
});
