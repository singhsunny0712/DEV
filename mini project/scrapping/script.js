const request = require('request');
const file=require('fs');
let cheerio=require('cheerio')

let pages = [];
for(var i=1;i<=5;i++){
var id=i;
let url=`https://www.nic.in/employee-list/page/${id}/`;

request(url, function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
if(error==null && response.statusCode==200){
    const contactDetails = getJson(body);
    pages = [...pages, ...contactDetails];
    // pages.push(contactDetails);
    console.log(pages.length)
    // file.writeFileSync('./abc.html',card);
}

});
}

file.writeFileSync('./abcd.json',pages);

function getJson(body){
    let co=cheerio.load(body);
    let data = [];

    co('.card-info').each(function (i, e) {
    let perinfo={};
    let n=co(this).find("strong").text().trim();
    let pergrp=co(this).find('.person-grup').text().trim();
    let perpro=co(this).find('.person-profile').text().trim();
    let email=co(this).find('.person-mailid').text().trim();
     
    

    perinfo['name']=n;
    perinfo['persongroup']=pergrp;
    perinfo['personprofile']=perpro;
    perinfo['email']=email;
   //  console.log(n);
   //  console.log(pergrp);
   //  console.log(perpro);
   //  console.log(email);
    // console.log(perinfo);
   data.push( perinfo);
});
   return data;
}