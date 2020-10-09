let fs=require("fs");
let path=require("path");

// how to check wheather a pth is file ?? => google
function checkWhetherFile(path_string){
    return fs.lstatSync(path_string).isFile();
}

// content read directory ?? => google
function childrenReader(src){
    let children=fs.readdirSync(src);
    return children;
}



function viewAsFlatFile(src,toprint){
    let isFile=checkWhetherFile(src);

    if(isFile==true){
        console.log(toprint+"*");
    }else{
        console.log(toprint);
        let children=childrenReader(src);
        // console.log(children);
        for(let i=0;i<children.length;i++){
            let childPath=path.join(src,children[i]);
            let ctoprint=path.join(toprint,children[i]);
            viewAsFlatFile(childPath,ctoprint);
        }
    }
}

function viewAsTree(src,indent){
    let isFile=checkWhetherFile(src);

    if(isFile==true){
        console.log(indent+path.basename(src)+"*");
    }else{
        console.log(indent+path.basename(src));
        let children=childrenReader(src);
        // console.log(children);
        for(let i=0;i<children.length;i++){
            let childPath=path.join(src,children[i]);
            viewAsTree(childPath,indent+"--");
        }
    }
}

let input=process.argv[2];
// console.log(input);
// viewAsFlatFile(input,path.basename(input));
viewAsTree(input,"");

// run ==> 
//  node viewFile.js "C:\Users\SUNNY SINGH\Desktop\DEV\dev GTBIT\lecture2\activity\d10"