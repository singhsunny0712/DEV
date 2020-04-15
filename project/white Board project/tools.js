var activeTool=".pencil";
ctx.strokeStyle="black";

ctx.lineWidth=1;
var pencilOptions=document.querySelector(".pencil-options")
var eraserOptions=document.querySelector(".eraser-options")
var sticky=document.querySelector(".sticky")
var eraser=document.querySelector(".eraser");
var pencil=document.querySelector(".pencil");
var imgupload=document.querySelector(".imgupload ");
var download=document.querySelector(".download");
var undo=document.querySelector(".undo");
var redo=document.querySelector(".redo");
var imgOptions=document.querySelector(".img");

function handletoolChange(tool){
    if(tool=="eraser"){
        if(activeTool==".eraser"){
            eraserOptions.classList.add("show");
        }else{
            // activeTool="eraser";
        var current = document.querySelector(activeTool);
        eraser.classList.add("active");
        current.classList.remove("active");
        pencilOptions.classList.remove("show");
        ctx.strokeStyle="white";
        activeTool=".eraser";
        ctx.globalCompositeOperation="destination-out";
    }
}else if(tool=="pencil"){
    // activeTool="pen";
    if(activeTool==".pencil"){
        pencilOptions.classList.add("show");
    }else{
        ctx.strokeStyle="red";
        // console.log("hi");
        // console.log(ctx.strokeStyle);
       
        var current = document.querySelector(activeTool);
        pencil.classList.add("active");
        current.classList.remove("active");
        eraserOptions.classList.remove("show");
        download.classList.remove("active");
        ctx.strokeStyle="red";
        activeTool=".pencil"; 
        ctx.globalCompositeOperation="source-over";
      }
    }else if(tool=="sticky"){
        // console.log("inside sticky")
        activeTool=".sticky"; 
        var current = document.querySelector(activeTool);
        sticky.classList.add("active");
        eraser.classList.remove("active");
        pencil.classList.remove("active");
        imgupload.classList.remove("active");
        download.classList.remove("active");
        undo.classList.remove("active");
        redo.classList.remove("active");
        addScript(); 
    }else if(tool=="upload"){
        activeTool=".imgupload"; 
        var current = document.querySelector(activeTool);
        imgupload.classList.add("active");
        eraser.classList.remove("active");
        pencil.classList.remove("active");
        sticky.classList.remove("active");
        download.classList.remove("active");
        undo.classList.remove("active");
        redo.classList.remove("active");
        uploadimage();
        
    }else if(tool=="download"){
        activeTool=".download"; 
        var current = document.querySelector(activeTool);
        download.classList.add("active");
        eraser.classList.remove("active");
        pencil.classList.remove("active");
        sticky.classList.remove("active");
        imgupload.classList.remove("active");
        undo.classList.remove("active");
        redo.classList.remove("active");
        imgdownload();
        
    }else if(tool=="undo"){
        activeTool=".undo"; 
        var current = document.querySelector(activeTool);
        undo.classList.add("active");
        download.classList.remove("active");
        eraser.classList.remove("active");
        pencil.classList.remove("active");
        sticky.classList.remove("active");
        imgupload.classList.remove("active");
        redo.classList.remove("active");

        
        
    }else if(tool=="redo"){
        activeTool=".redo"; 
        var current = document.querySelector(activeTool);
        redo.classList.add("active");
        download.classList.remove("active");
        eraser.classList.remove("active");
        pencil.classList.remove("active");
        sticky.classList.remove("active");
        imgupload.classList.remove("active");
        undo.classList.remove("active");
       
        
    }
}

function changeSize(value,type){
    ctx.lineWidth=value;
    var pencilsizeshow=document.querySelector(".pencil-size-view");
    var erasersizeshow=document.querySelector(".eraser-size-view");
    // console.log(type);
    if(type=="pencil"){
        pencilsizeshow.innerHTML=value;
    }else{
        erasersizeshow.innerHTML=value;
    }

}
function changeColor(color){
   ctx.strokeStyle=color;
   console.log(ctx.strokeStyle);
}


