// 100 files
// read all files parallely in async way
let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

for(let i=0 ; i<files.length ; i++){
    fs.readFile(files[i] , function(err , data){
        console.log(data+"");
    })
}

