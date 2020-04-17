var p=console.log;

var zigzak=function(n){
    if(n==0){
        return;
    }
   p(n);
   zigzak(n-1);
   p(n);
   zigzak(n-1);
   p(n);

}


zigzak(3);