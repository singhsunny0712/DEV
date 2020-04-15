var password="pep1"
function askpassword(password,loginFail,login){
    if(password=="pep")
    login();
    else
    loginFail();
}

var user={
    name:"SUNNY",
  
    loginOK:function(){
        console.log(this.name+" logged In");
    
    },
    logFail:function(){
        console.log(this.name+" login Failed");
     
    }
    

};


askpassword(password,user.logFail.bind(user),user.loginOK.bind(user));
