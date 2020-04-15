var log=console.log

// var firstname="sunny";
// log(firstname);

// var secondname=firstname;
// log(secondname)

// firstname="singh"
// log(secondname)

//----------------------------------------
// var person={
//     name:"sunny",
//     age:22,
//     hobbies:["sci-fi","hangout"]
// }
// // log(person)

// var secperson=person
// // log(secperson)
// var thiredperson=Object.assign({},person)

// thiredperson.name="singh"
// thiredperson.age=25
// thiredperson.hobbies.push("Reading")
// secperson.hobbies.pop()
// person.hobbies.pop()
// log(person)
// log(secperson)
// log(thiredperson)

//-------------------------------
var arr=[1,1.4,'a',"string",null,undefined,NaN]
log(arr)

var brr=arr.slice();
arr.pop();
arr.unshift('0yo')
log(brr)
arr.sort();
log(arr)

//-----------------------

// var obj={
//     arr:[1,1.4,'a',"string",null,undefined,NaN]
// }

// var obj2=obj.arr.slice();
// obj2.pop();
// obj2.unshift('yo')
// log(obj2.arr)
// log(obj.arr)
