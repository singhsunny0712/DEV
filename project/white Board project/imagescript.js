function uploadimage(){
    const fileselector=document.getElementById("fileselector");
    const fileinput=document.getElementById("fileInput");
    const imgLayout = document.createElement("div")
    var topBar = document.createElement("div")
    var close = document.createElement("div")
    fileselector.addEventListener("click",function(event){
        event.preventDefault();
        fileinput.click();
    });
    fileinput.addEventListener("change",function(event){
       const body=document.querySelector("body");
       const file=event.currentTarget.files[0];
       const img=document.createElement("img");

       img.src=window.URL.createObjectURL(file);
       img.height=200;
       img.width=256;
    //    img.style.top="10rem";
    //    img.style.left="10rem";
       img.style.position="absolute"
       body.appendChild(img);
     
       
       

    close.setAttribute("class","close")
    topBar.setAttribute("class","top")
    imgLayout.setAttribute("class","img-box")
    topBar.appendChild(close)
    imgLayout.appendChild(topBar)
    imgLayout.appendChild(img)
    body.appendChild(imgLayout)

    close.addEventListener("click",function(e){
        body.removeChild(imgLayout);
    
    });

});


// console.log("i am in download");
    imgLayout.addEventListener("mousedown",onimgmousedown);
    imgLayout.addEventListener("mousemove",onimgmousemove);
    imgLayout.addEventListener("mouseup",onimgmouseup);
    

}

let isdown1=false;
let InitialimgX=null;
let InitialimgY=null;
function onimgmousedown(event){ 
    
    InitialimgX=event.clientX;
    InitialimgY=event.clientY;
    // console.log(InitialimgX+" "+InitialimgY);
    
    isdown1=true;
}

function onimgmousemove(event){
    if(!isdown1) return;
    // console.log('in img move');
    const imgLayout=event.currentTarget;
    // console.log(imgLayout);
    let finalimgX=event.clientX;
    let finalimgY=event.clientY;
    let distimgX=finalimgX-InitialimgX;
    let distimgY=finalimgY-InitialimgY;
    // console.log(distimgX+" "+distimgY);
    
    let {top,left}=imgLayout.getBoundingClientRect();
    // console.log(top+" "+left);
    imgLayout.style.top=top+distimgY+"px";
    imgLayout.style.left=left+distimgX+"px";
    // console.log(imgLayout.style.top+" "+imgLayout.style.left);
    InitialimgX=finalimgX;
    InitialimgY=finalimgY;

}

function onimgmouseup(event){
    // console.log('in img up');
    isdown1=false;
}


