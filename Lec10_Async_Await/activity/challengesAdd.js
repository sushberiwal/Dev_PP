const puppeteer = require("puppeteer");
const id = "xifov12632@aramidth.com";
const pw = "123456789";


let challenges = require("./challenges");

(async function(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      }); // 10 sec
    let allPages = await browser.pages();
    let tab = allPages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.click('div[data-analytics="NavBarProfileDropDown"]');
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav a' , {visible:true});
    let bothATags = await tab.$$('.nav-tabs.nav.admin-tabbed-nav a');
    let manageChallengeATag = bothATags[1];
    await manageChallengeATag.click();

    await tab.waitForSelector('.btn.btn-green.backbone.pull-right' , {visible:true});
    let createChallengeBtn = await tab.$('.btn.btn-green.backbone.pull-right');
    // console.log(createChallengeBtn);
    let createChallengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href");  }  ,  createChallengeBtn);
    createChallengeLink = 'https://www.hackerrank.com'+createChallengeLink;

    // simultaenously open tabs for all the challenges
    // for(let i=0 ; i<challenges.length ; i++){
    //     addChallenge(challenges[i] , browser , createChallengeLink );
    // }
    
    // OR

    // add challenges one by one
    // for(let i=0 ; i<challenges.length ; i++){
    //     // add a single challenge
    //     await addChallenge(challenges[i] , browser , createChallengeLink );
    // }


    await addChallenge(challenges[0] , browser , createChallengeLink);
})();   



// by default returns a pending promise
async function addChallenge(challenge , browser , createChallengeLink ){

    // {
        // 
    // }
    let newTab = await browser.newPage();
    newTab.goto(createChallengeLink);

    newTab.close();
}