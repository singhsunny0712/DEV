// var age=14;
var steve={
    name:"steve",
    age:105,
    getAge:function(){
        // return "My age is "+steve.age;
        return "My age is "+this.age;/*by "this" solve the issue of calling
         after null of steve*/
    }
}
console.log(steve.getAge());
var hydra=steve;
steve=null;
// console.log(steve);
console.log(hydra.getAge());