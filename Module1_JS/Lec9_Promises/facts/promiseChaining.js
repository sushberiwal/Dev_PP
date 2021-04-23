// facts about promises ->
// promisifed function always gives you a pending promise
// initial state of a promise is pending
// pending promise can only be resolved into states => fullfill or rejected
// then and catch can only be called on pending promise
// then attaches a succes callback function to the pending promise
// catch attaches a failure callback function to the pending promise

// then and catch also gives us a pending promise known as thenKaPromise
// then and catch are also async functions

// chaining
const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(data){
    console.log(data+"");
})





