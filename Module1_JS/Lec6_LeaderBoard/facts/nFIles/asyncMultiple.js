let fs = require("fs");

let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];


for(let i=0 ; i<files.length ; i++){
    fs.readFile(files[i] , function(error , data){
        console.log(data+"");
    })
}

