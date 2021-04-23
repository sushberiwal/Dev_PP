const fs = require("fs");


console.log("start"); // imp


let f1KaData = fs.readFileSync("./f1.txt");   // 100gb file
console.log(f1KaData+"");


// it is not dependent on f1KaData
console.log("end"); // imp 