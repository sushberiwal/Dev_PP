let fs = require("fs");

console.log("Start");

let f1KaData = fs.readFileSync("./f1.txt"); // 100gb
console.log(f1KaData+"");

console.log("End");