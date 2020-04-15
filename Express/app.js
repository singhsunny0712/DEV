//express
const express=require("express");
console.log(__dirname)
const path=require("path");

//Server
const app=express();

// it add urlEncoded string to  req. body

app.use(express.urlencoded({extended:true}));

//listen server
//route => url => request

app.get("/login",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"));

});

app.get("/me",function(req,res){
    // res.sendFile(path.join(__dirname+"/index.html"));
    res.end("<h1>me Page</h1>");

});

//app.post();
//app.patch();

app.post("/login",function(req,res){
    
    // console.log("server is start");
    console.log(req.body);
    const {myemail, mypassword }=req.body;
    if(myemail=="abc@gmail.com" && mypassword==="12345"){
        // res.end("<h1>User logged In</h1>");
        res.redirect("/me");
    }else{
        res.end("<h1>User Failed to logged</h1>");

    }
});
app.listen(3000,function(req,res){
    console.log("3000")
})