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
    let waitAndClickPromise = waitAndClick('#base-card-1-link');
    return waitAndClickPromise; //Promise<Pending>
  })
  .then(function(){
    let waitAndClickPromise = waitAndClick('a[data-attr1="warmup"]');
    return waitAndClickPromise;
  })
  .then(function(){
    console.log("Reached Warmup Page !!!");
  })
  .catch(function (error) {
    console.log(error);
  });


  function waitAndClick(selector){
    return new Promise(function(resolve , reject){
      let waitPromise = tab.waitForSelector(selector , {visible:true});
      waitPromise.then(function(){
        let clickPromise = tab.click(selector);
        return clickPromise;
      })
      .then(function(){
        // wait and click succesfully done
        resolve();
      })
      .catch(function(error){
        reject(error);
      })
    });
  }