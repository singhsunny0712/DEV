function fun(a,b,c){
 
    console.log('-------------------------------');
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arguments.length);
    console.log(arguments);//if parameter of function is more then argument holds the all argument
    console.log('-------------------------------');

}


fun();
fun(10);
fun(10,"hi","byee",3.22,40,"there");