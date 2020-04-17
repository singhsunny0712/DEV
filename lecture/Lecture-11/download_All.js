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
var arr=[
    "http://google.com/logo.png",
    "http://google.com/logo.png",
    "http://google.com/logo.png"
];
var parr=[];
for(var i=0 ;i<arr.length ; i++){
    var dpromise = downloadfile(arr[i]);
    parr.push(dpromise);
}
var mainpro = Promise.all(parr);
mainpro.then(function(npath){
    for(var i=0 ;i < npath.length ; i++){
        console.log("File saved to :"+npath[i]);
    }
    return Promise.all(npath.map(compressfile)); 
}).then(function (nfilepath){
    for(var i=0 ;i < nfilepath.length ; i++){
        console.log("File compressed to :"+nfilepath[i]);
    }
    return Promise.all(nfilepath.map(uploadfile));
}).then(function (ndiskpath){
    for(var i=0 ;i< ndiskpath.length ;i++){
        console.log("file successfully uploaded to : "+ndiskpath[i]);
    }
});
