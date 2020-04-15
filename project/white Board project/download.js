function imgdownload(){
    // console.log("inside download section");
    const canvas=document.querySelector("canvas");
    var image=canvas.toDataURL("Image/png",1.0).replace("Image/png","image/octet-stream");
    var link=document.createElement('a');
    link.download="my-image.png";
    link.href=image;
    link.click();
    document.appendChild(link);
    document.removeChild(link);
}