const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html");
// htmlKaData => html treat to

let ch = cheerio.load(htmlKaData);

// console.log(ch);

let pTags = ch("p");
console.log(pTags);



//<p class="main">I am a p tag in body !!!</p> => object form








// html me se => selector ke base => element get
