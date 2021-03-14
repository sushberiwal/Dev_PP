let fs = require("fs");


let leaderboard = JSON.parse(fs.readFileSync("./leaderboard.json"));


console.table(leaderboard);

