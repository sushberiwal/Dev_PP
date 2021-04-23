let fs = require("fs");

console.log("start");

fs.readFile("./f1.txt" , cb);

function cb(err , data){
    console.log(data+"");   
}

console.log("end");