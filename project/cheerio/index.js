const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');
const json2xls = require('json2xls');


async function fetchPage(url) {
    const res = await fetch(url);
    const body = await res.text();
    return body;
}

async function getPage() {
    console.time();
    let pages = []
    for(let i = 1; i <= 441; i++) {
        
        const data = await fetchPage(`https://www.nic.in/employee-list/page/${i}/`);
        const contactDetails = await getJSON(data);
        pages = [...pages, ...contactDetails];//thread operation means concatenate two array
        console.log(pages.length);

    }

    console.timeEnd()
    console.log("final length " + pages.length);

    await fs.promises.writeFile('temp.json', JSON.stringify(pages));

    console.log()

    const xls = json2xls(pages);
    fs.writeFileSync('final.xlsx', xls, 'binary');
}

async function getJSON(data) {
    const $ = cheerio.load(data);

    const contactList = [];
    const details = $('.card-info').toArray();

    details.forEach((ele) => {
        const contact = {};
        let item = $(ele).find('strong');
        contact['name'] = $(item).text().trim();

        item = $(ele).find('.person-grup')[0];
        contact['group'] = $(item).text().trim();

        item = $(ele).find('.person-profile');
        contact['grade'] = $(item).text().trim();

        item = $(ele).find('.person-mailid');
        contact['mail'] = $(item).text().trim();

        item = $(ele).find('.person-LL-no');
        contact['phone'] = $(item).text().trim();

        contactList.push(contact);
    });
    return contactList;
}

getPage();