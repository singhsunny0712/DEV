var fs=require("fs");
var path=require("path");//these library used for joining path according to window

// fs.readdir("./hi",function(err,arr){

//     console.log(err);
//     console.log(arr);
// })


//its basically used for checking direc or not
// fs.stat("./ts.js", function(err, stats) {
//     console.log(stats.isDirectory());
//     // console.log(stats);
//   });



function viewastree(dirpath,indent){

    let pmsg=indent+path.basename(dirpath);//its  help us to only find last dir
    // let spl=pmsg.split("/");
    let stat=fs.lstatSync(dirpath);
    if(stat.isDirectory()==false){
        console.log(pmsg+"*");
        return;
    }
    
    console.log(pmsg);
    let children=fs.readdirSync(dirpath);//theys help us to give all file and folder in current dir

    for(var i=0;i<children.length;i++){
        let cpath=path.join(dirpath,children[i]);
        viewastree(cpath,indent+"---");
    }
 }

viewastree("../","");


