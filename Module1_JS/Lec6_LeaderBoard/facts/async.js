let fs = require("fs");


console.log("start");

fs.readFile("./f1.txt" , cb);

function cb(error , data){
    console.log(data+"");
}

console.log("end");


