var c={
    name:"c object",
    log:function(){
        this.name="updated c object";

        function setName(newName){
            this.name=newName;
        }
        setName("Updated again c object");
    }
};
c.log();
console.log(global.name);
console.log(c.name);