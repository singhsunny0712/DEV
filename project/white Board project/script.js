var pencil=document.querySelector(".pencil");
// mousedown
// mousemove
// mouseup



var flag=false;
const undoStack=[];
const redoStack=[];
const undo1=document.querySelector(".undo");
const redo1=document.querySelector(".redo");
board.addEventListener("mousedown",function(event){
// console.log(event.clientX);
// console.log(event.clientY);
var {x,y}=getLocation(event);
ctx.beginPath();
ctx.moveTo(x,y);
flag=true;
const point={
    x,y,
    effect:ctx.globalCompositeOperation,
    color:ctx.strokeStyle,
    width:ctx.lineWidth,
    type:"begin"
}

undoStack.push(point);

});

board.addEventListener("mousemove",function(event){
    if(!flag) return;
    var {x,y}=getLocation(event);
    ctx.lineTo(x,y);
    ctx.stroke();
    const point={
        x,y,
        effect:ctx.globalCompositeOperation,
        color:ctx.strokeStyle,
        width:ctx.lineWidth,
        type:"end"
    }
    undoStack.push(point);
});

board.addEventListener("mouseup",function(event){
    flag=false;
})
function getLocation(event){
    return{
      x:  event.clientX - board.getBoundingClientRect().left,
        y: event.clientY - board.getBoundingClientRect().top 
}
}
let interval=null;
undo1.addEventListener("mousedown",function(){
   interval=window.setInterval(function(){
    if(undoStack.length <= 0) return;
    redoStack.push(undoStack.pop());
        redrawAll();
    },50);
})
undo1.addEventListener("mouseup",function(){
clearInterval(interval);
interval=null;
});
function redrawAll(){
    ctx.clearRect(0,0,board.width,board.height);
    for(let i=0;i<undoStack.length;i++){
        let{x,y,effect,color,width,type}=undoStack[i];
        if(type==="begin"){
          ctx.lineWidth=width;
          ctx.strokeStyle=color;
          ctx.globalCompositeOperation=effect;
          ctx.beginPath();
          ctx.moveTo(x,y);
        }else if(type==="end"){
            ctx.lineWidth=width;
            ctx.strokeStyle=color;
            ctx.globalCompositeOperation=effect;
            ctx.lineTo(x,y);
            ctx.stroke();
            ctx.stroke();

        }
    }
}


redo.addEventListener("mousedown",function(){
    interval=window.setInterval(function(){
        if(redoStack.length <= 0) return;

        undoStack.push(redoStack.pop());
        redrawAll();
    },50)
})

redo.addEventListener("mouseup",function(){
    clearInterval(interval);
    interval=null;
})
