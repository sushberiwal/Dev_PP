let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

let allPendingPromises = [];

for(let i=0 ; i<files.length ; i++){
    let fileKaPromise = fs.promises.readFile(files[i]);
    // fileKaPromise.then( function(data){
    //     console.log(data+"");
    // });
    allPendingPromises.push(fileKaPromise);
}


// console.log(allPendingPromises);


let combinedPromise = Promise.all(allPendingPromises);

combinedPromise.then(function(allFilesKaData){
    console.log(allFilesKaData);
})


