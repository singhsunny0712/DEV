var ajax = require("./lib/filedownload");

var total = 100;
var cost = 20;

function chargecCreditcard(){
    total -= cost;
    console.log(total);
}

//inversion of control
ajax.trackCheckout(cost, chargecCreditcard);//callback se (extension of file => "../sep3/lib/filedownload")


//promise solve inversion of control
ajax.trackCheckout(cost).then(chargecCreditcard);//promise se (extension of file => "./lib/filedownload")