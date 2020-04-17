function downloadFile(url,downloaded){
    var path="C:\\Download\\";
    
    console.log("Download File From "+url);
    setTimeout(function(){
    downloaded(url,path);
    },3000);
}
function downloaded(url,path){
    var arr=url.split("/");
    console.log(arr);
    while(arr.length>1){
        arr.shift();
    }
    console.log(arr);
    var s=path+arr;
    console.log("File saved to "+s);
}
downloadFile("http://google.com/logo.png",downloaded);

var str="C:\\download\\"
console.log(str);
