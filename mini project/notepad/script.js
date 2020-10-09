// var fs = require('fs'); 
// const path = require('path');
const p=console.log;
var txt="";

function mysub(){
  $(document).ready(function () {
    if ($.trim($("textarea").val()) != "") {
        alert($("textarea").val());
    }
});
 
    // mkdiri();
  
}
function myremove(){
    p(txt);
    txt="";
    document.getElementById('text').value="";
    p(txt);
}

function mkdiri(){
    fs.mkdir(path.join('./', 'folder'), 
   { 
    recursive: true }, (err) => { 
     if (err) { 
       return console.error(err); 
     } 
     console.log('Directory created successfully!'); 
   }); 
}

