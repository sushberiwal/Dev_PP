let fs = require("fs");
let cheerio = require("cheerio");
let request = require("request");

request("https://github.com/topics" , parseData);

function parseData(error , response , data){
    let ch = cheerio.load(data);
    let allATags = ch('.topic-box a');
    for(let i=0 ; i<allATags.length ; i++){
        let topicLink = ch(allATags[i]).attr("href");
        let completeTopicLink = "https://www.github.com"+topicLink;
        getIssuesOfATopic(completeTopicLink);
    }
}



function getIssuesOfATopic(topicLink){
    // async call to get content of that topic
    // console.log(topicLink);
    request(topicLink , parseTopic);
}

function parseTopic(error , response , data){
    // TopicName -> Git
    let ch = cheerio.load(data);
    let topicName = ch(".h1-mktg").text().trim();
    console.log(topicName);
    // check if folder dont exist then make a folder !!
    if(!fs.existsSync(`./${topicName}`)){
        // create Folder on the basis of topic name !!
        fs.mkdirSync(`./${topicName}`);
    }
    let allProjectArticleTags = ch('.border.rounded.color-shadow-small.color-bg-secondary.my-4');
    // {  "0":{} , "1":{} , "2" : {}  }
    // console.log(topicName);
    for(let i=0 ; i<5 ; i++){
        workOnSingleProject(allProjectArticleTags[i] , topicName);
    }
}

// work on a single project
function workOnSingleProject( projectArticleTag , topicName ){
    // project name
    // issue link
    let projectName = cheerio(projectArticleTag).find('a.text-bold').text().trim();
    let allNavLinks = cheerio(projectArticleTag).find(".tabnav-tabs a");
    let issueLink = cheerio(allNavLinks["1"]).attr("href");
    let completeIssueLink = "https://www.github.com"+issueLink;

    // console.log(`Project Name : ${projectName} IssueLink : ${completeIssueLink}`);
    let projectPath = `./${topicName}/${projectName}`;
    if(!fs.existsSync(projectPath)){
        fs.mkdirSync(projectPath);
    }

    request(completeIssueLink , parseIssue);

    function parseIssue(error , response ,data){
        // now you are on issue page of a single project !!!!
        let ch = cheerio.load(data);
        let allIssuesATags = ch('.js-navigation-container.js-active-navigation-container .js-issue-row .flex-auto a.h4');
        for(let i=0 ; i<allIssuesATags.length ; i++){
            let issueName = ch(allIssuesATags[i+""]).text().trim();
            let issueLink = ch(allIssuesATags[i+""]).attr("href");
            issueLink = "https://www.github.com"+issueLink;
            if(!fs.existsSync(`${projectPath}/issues.json`)){
                fs.writeFileSync(`${projectPath}/issues.json` , JSON.stringify([]));
            }
            else{
                let issues = JSON.parse(fs.readFileSync(`${projectPath}/issues.json`));
                let newIssue = {
                    "Issue Name":issueName,
                    "Issue Link":issueLink
                }
                issues.push(newIssue);
                fs.writeFileSync(`${projectPath}/issues.json` , JSON.stringify(issues));
            }
        }
    }
}