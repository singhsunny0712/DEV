var print=console.log;
var num=16;
var b=3;




function get(num,b){
    
    var ans=0;
    var p=1;
    while(num!=0){
        // print(num)
        var r=num%b;
        num=Math.floor(num/b);
        ans+=r*p;
        p*=10;
    }
    // print(ans);
    return ans;
    
}


print(get(num,b));




