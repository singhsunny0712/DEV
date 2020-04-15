var body=document.querySelector("body");
var p=document.createElement("p");

p.textContent="This is paragraph tag made through JavaScript";

p.style.color="red";

body.appendChild(p);
var h1=document.createElement("h1");
h1.textContent="This is first Heading by DOM";
body.insertBefore(h1,p);
h1.setAttribute("class","bigHeading");