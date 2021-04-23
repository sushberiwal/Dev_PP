const request = require("request");
const cheerio = require("cheerio");
const getMatch = require("./match");

function getAllMatches(link){
    request( link  , cb );
}

function cb(error , response , data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let allATags = ch('a[data-hover="Scorecard"]');
    for(let i=0 ; i<allATags.length ; i++){
        let aTag = allATags[i+""];
        let link = ch(aTag).attr("href");
        let completeLink = "https://www.espncricinfo.com"+link;
        getMatch(completeLink);
    }
}

module.exports = getAllMatches;

// module.exports.getAllMatches = getAllMatches;
