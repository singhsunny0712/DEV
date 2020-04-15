function addScript(){
    var flag=false;
    // Html Element are created
    const body=document.querySelector("body");
    const stickyPad=document.createElement("div");
    const nav=document.createElement("div");
    const minimize=document.createElement("div");
    const close=document.createElement("div");
    const textarea=document.createElement("textarea");
    // attributes-set the name of the class
    stickyPad.setAttribute("class","sticky-pad");
    // textarea.setAttribute("class","writting-pad");
    nav.setAttribute("class","nav");
    minimize.setAttribute("class","minimize");
    close.setAttribute("class","close");
    textarea.setAttribute("class","writting-pad");
    // added to DOM
    body.appendChild(stickyPad);
    stickyPad.appendChild(nav);
    stickyPad.appendChild(textarea);
    nav.appendChild(minimize);
    nav.appendChild(close);
    
    close.addEventListener("click",onclose);
    minimize.addEventListener("click",onminimize);

    stickyPad.addEventListener("mousedown",onmousedown);
    
    stickyPad.addEventListener("mousemove",onmousemove);
    
    stickyPad.addEventListener("mouseup",onmouseup);

}
function onclose(event){
    console.log(event)
    const stickyPad=event.target.parentElement.parentElement;
    const body=event.target.parentElement.parentElement.parentElement;
    body.removeChild(stickyPad);
}

function onminimize(event){
    if(flag===false){
         flag=!flag;
         var width=event.target.parentElement.parentElement.children[1].offsetWidth;
        event.target.parentElement.parentElement.children[1].style.display="none"
        event.target.parentElement.parentElement.children[0].style.width=width+"px";
    }else{
        event.target.parentElement.parentElement.children[1].style.display="block"
        flag=!flag;
    }
};

let isdown=false;
let InitialX=null;
let InitialY=null;
function onmousedown(event){
 InitialX=event.clientX;
 InitialY=event.clientY;
//  console.log("inside down")
 isdown=true;
}

function onmousemove(event){
    if(!isdown) return;
    // console.log("inside move")
    
    const stickyPad=event.currentTarget;
    // console.log(stickyPad);
    let finalX=event.clientX;
    let finalY=event.clientY;
    let distX=finalX-InitialX;
    let distY=finalY-InitialY;
    
    let {top,left}=stickyPad.getBoundingClientRect();
    // console.log(top+" "+left);
    stickyPad.style.top=top+distY+"px";
    stickyPad.style.left=left+distX+"px";
    // console.log(stickyPad.style.top+" "+stickyPad.style.left);

    InitialX=finalX;
    InitialY=finalY;
    
}

function onmouseup(event){
    // console.log("inside up")
    isdown=false;
} 





