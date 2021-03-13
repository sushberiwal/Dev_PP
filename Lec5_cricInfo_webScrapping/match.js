const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");


function getMatch(link){
    request(link , cb);
}

// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard" , cb);

function cb(error , response , data){
    parseData(data);
}

function parseData(html){
    // it is html of a single match !!!!
    let ch = cheerio.load(html);
    let bothInnings = ch('.match-scorecard-page .Collapsible');
    // fs.writeFileSync("./match.html" , bothInnings+"");
    for(let i=0 ; i<bothInnings.length ; i++){
        let inning = ch(bothInnings[i+""]);
        let teamName = inning.find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim(); 
        // ["Delhi Capitals " , " (20akjsbfkja)"   ];
        console.log(teamName);

        let batsmanTable = inning.find('.table.batsman');

        let allTrs = batsmanTable.find("tbody tr");

        for(let j=0 ; j<allTrs.length-1 ; j++){
            let allTds = ch(allTrs[j]).find("td");
            if(allTds.length > 1){
                // valid tds
                let batsmanName = ch(allTds['0']).text().trim();
                let runs = ch(allTds['2']).text().trim();
                let balls = ch(allTds['3']).text().trim();
                let fours = ch(allTds['5']).text().trim();
                let sixes = ch(allTds['6']).text().trim();
                let strikeRate = ch(allTds['7']).text().trim();
                console.log(`Name : ${batsmanName} Runs : ${runs} Balls : ${balls} Fours : ${fours} Sixes : ${sixes} StrikeRate : ${strikeRate}`)
            }
        }
        console.log("##########################################");
    }

}




module.exports = getMatch;