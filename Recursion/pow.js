
var pow=function(a,n){
    if(n==0){
        return 1;
    }

    if(n%2==0){
        var ans=pow(a,Math.floor(n/2));
        return ans*ans;
    }else{
        var ans=pow(a,Math.floor(n/2));
        return a*ans*ans;
    }
} 


console.log(pow(2,3));