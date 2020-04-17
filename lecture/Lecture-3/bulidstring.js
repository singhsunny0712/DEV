var animal=['Hen',
'elephent',
'ilama',
'leopard',
'astrich',
'whale',
'octopus',
'lion',
'dog',
'']


function first(name){
    return name[0]==''?"": name[0]
}

console.log(animal.map(first));


console.log(animal.map(function(name){
    return name[0];
}));

