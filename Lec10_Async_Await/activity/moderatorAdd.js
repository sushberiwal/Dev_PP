const puppeteer = require("puppeteer");
const id = "xifov12632@aramidth.com";
const pw = "123456789";

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
    // delay
    await tab.waitForTimeout(5000);
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav a' , {visible:true});
    let bothATags = await tab.$$('.nav-tabs.nav.admin-tabbed-nav a');
    let manageChallengeATag = bothATags[1];
    await manageChallengeATag.click();

    // moderator Add ka code comes here
    await addModerators(browser , tab); // faith => it will add all the moderators on all the pages !!!!
})();   


async function addModerators(browser , tab){
     
    //1. get all links of all the questions

    // loop on allLinks and call addModeratorToAQuestion for every quesLink
    //2. addModeratorsToAQuestion(quesLink , browser ); // it will add moderator to a single question

    // 3. if next button is not disabled then click on it
    // 4. call addModerators(browser , tab);
}

