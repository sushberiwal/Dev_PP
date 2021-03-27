const puppeteer = require("puppeteer");
const id = "savob68663@bombaya.com";
const pw = "123456789";
let tab;
// all functions of puppeteer promisifed => gives you a pending promise initially

// opens a new browser instance

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});
// Promise<Pending>

browserOpenPromise
  .then(function (browser) {
    console.log("Browser opened !!!");
    let allPagesPromise = browser.pages();
    return allPagesPromise;
  })
  .then(function (pages) {
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
  })
  .then(function () {
    let idTypePromise = tab.type("#input-1", id);
    return idTypePromise;
  })
  .then(function () {
    let pwTypePromise = tab.type("#input-2", pw);
    return pwTypePromise;
  })
  .then(function () {
    let loginPromise = tab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    ); //navigation => page change
    return loginPromise;
  })
  .then(function(){
    waitAndClick('#base-card-1-link');
  })
  // .then(function () {
  //   let waitPromise = tab.waitForSelector('#base-card-1-link' , {visible:true});
  //   return waitPromise;
  //   // Promise<Pending>
  // })
  // .then(function () {
  //   // console.log("logged in to hackerrank !!!");
  //   let ipKitClickedPromise = tab.click("#base-card-1-link"); // navigation
  //   return ipKitClickedPromise;
  // })
  .then(function () {
    let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]' , {visible:true});
    return waitPromise;
  })
  .then(function(){
    let warmupClickedPromise = tab.click('a[data-attr1="warmup"]'); // navigation
    return warmupClickedPromise;
  })
  .then(function(){
    console.log("Reached Warmup Page !!!");
  })
  .catch(function (error) {
    console.log(error);
  });

function waitAndClick(selector){
// wait 
// click
}
