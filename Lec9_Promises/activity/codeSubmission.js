const puppeteer = require('puppeteer');

// all functions of puppeteer promisifed => gives you a pending promise initially


// opens a new browser instance

let browserOpenPromise = puppeteer.launch({ headless: false });
// Promise<Pending>

browserOpenPromise.then(function(browser){
    console.log("Browser opened !!!");
    console.log(browser);
    let allPagesPromise = browser.pages();
    return allPagesPromise;
})
.then(function(pages){
    let tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.google.com");
    return pageOpenPromise;
    //Promise<pending>
})
.then(function(){
    console.log("google homepage opened !!!!!")
})
.catch(function(error){
    console.log(error);
})



// const browser = await puppeteer.launch();
// const page = await browser.newPage();
// await page.goto('https://example.com');
// await page.screenshot({ path: 'example.png' });
// await browser.close();