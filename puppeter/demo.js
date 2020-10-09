const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false ,
    defaultViewport:null,
    args:["--start-maximized"]
    });
  // const page = await browser.newPage();
  // await page.goto('https://www.google.com');
  const page = await browser.newPage();
  const page1 = await browser.newPage();
    await page.goto('https://www.hackerrank.com/auth/signup?h_l=body_middle_left_button&h_r=sign_up');
  await page1.goto('https://www.hackerrank.com/auth/signup?h_l=body_middle_left_button&h_r=sign_up');
  // other actions...
//   await browser.close();
})();

// async function run () {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.google.com');
//     await page.screenshot({path: 'screenshot.png'});
//     browser.close();
// }
// run();


// run().then(() => console.log('Done')).catch(error => console.log(error));

// async function run() {
//   // Create a new browser. By default, the browser is headless,
//   // which means it runs in the background and doesn't appear on
//   // the screen. Setting `headless: false` opens up a browser
//   // window so you can watch what happens.
//   const browser = await puppeteer.launch({ headless: false });

//   // Open a new page and navigate to google.com
//   const page = await browser.newPage();
//   const page1 = await browser.newPage();
//   await page.goto('https://www.hackerrank.com/auth/signup?h_l=body_middle_left_button&h_r=sign_up');
//   await page1.goto('https://www.hackerrank.com/auth/signup?h_l=body_middle_left_button&h_r=sign_up');

//   // Wait 5 seconds
//   await new Promise(resolve => setTimeout(resolve, 5000));

//   // Close the browser and exit the script
// //   await browser.close();
// }
