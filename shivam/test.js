let cheerio = require("cheerio");
let fs = require("fs");
let request = require("request");
// let matchFile = require("./allMatch.js");
let url = "https://www.g2.com/categories/crm";
request(url, cb);
function cb(err, header, body) {
    // request is successfully processed
    console.log(header.statusCode);
    if (err == null && header.statusCode == 405) {
        console.log("recieved Response");
        // console.log("Html recieved");
        // parseHtml(body);
        // fs=> file system
        fs.writeFileSync("page.html", body);
    } else if (header.statusCode == 404) {
        console.log("Page Not found");
    } else {
        console.log(err);
        // console.log(header);
    }
}
// function parseHtml(body) {
//     let $ = cheerio.load(body);
//     let aPageAnchor = $("a[data-hover='View All Results']");
//     let link = aPageAnchor.attr("href");
//     let cLInk = "https://www.espncricinfo.com/" + link;
//     matchFile.allMatchHandler(cLInk);
// }