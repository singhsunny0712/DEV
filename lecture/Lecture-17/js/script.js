window.onscroll=function(){
    myfunction();
}

//DOM 
var nav=document.querySelector("nav");
var features=document.querySelector(".features");


var navigation=document.querySelector(".navigation");
var icon=document.querySelector(".mobile_icon");
icon.addEventListener("click",function(){
    navigation.classList.toggle("active");
})

function myfunction(){
var dftop=window.pageYOffset;
if(dftop > features.offsetTop){
    navigator.classList.add("sticky");
}else{
    
    navigator.classList.remove("sticky");
}
}