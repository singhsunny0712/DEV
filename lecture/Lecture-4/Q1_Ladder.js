var ladder={
    i:0,
    UP: function(){
       this.i=this.i+1;//=>this.i++;
       return this;
    },
    
    Down:function(){
        this.i--;
        return this;
     },
     Showstep:function(){
       console.log("Total call "+this.i);
       return this;
     }
};
// ladder.UP();
// ladder.Showstep();
ladder.UP().UP().Down().Down().UP().Showstep();