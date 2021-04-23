// n files
// serial
// using loops // functions

let files = ["../f1.txt", "../f2.txt", "../f3.txt"];

let fs = require("fs");

// let idx = 0;
// while (idx < files.length) {
//   fs.readFile(files[idx], function (err, data) {
//     console.log(data + "");
//     idx++;
//   });
// }
// closures in javascript

function getFilesContent(idx){
    if(idx == files.length){
        return;
    }
    // sync call
    // getFilesContent(idx+1)
    // async call
    fs.readFile(files[idx] , function(err , data){
        getFilesContent(idx+1);
        console.log(data+"");
    })
}



getFilesContent(0);


