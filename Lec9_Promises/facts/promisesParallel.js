// multiple files
// promisifed function
// read files at the same time i.e parallely !!

const fs = require("fs");

let f1KaPendingPromise = fs.promises.readFile("./f1.txt");
let f2KaPendingPromise = fs.promises.readFile("./f2.txt");
let f3KaPendingPromise = fs.promises.readFile("./f3.txt");

f1KaPendingPromise.then(function(data){
    console.log("F1 Ka Data = " + data);
});

f1KaPendingPromise.catch(function(error){
    console.log(error);
});

f2KaPendingPromise.then(function(data){
    console.log("F2 Ka Data = " + data);
});
f2KaPendingPromise.catch(function(error){
    console.log(error);
});

f3KaPendingPromise.then(function(data){
    console.log("F3 Ka Data = " + data);
});
f3KaPendingPromise.catch(function(error){
    console.log(error);
});