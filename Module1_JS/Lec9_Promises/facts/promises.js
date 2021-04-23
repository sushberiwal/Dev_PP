const fs = require("fs");

// B gets a pending promise          // A -> initially returns a pending promise
let pendingPromise = fs.promises.readFile("./f2.txt"); // 100gb => 10 min

console.log(pendingPromise);
// pendingPromise => Promise object whose state is pending !!!


// success callback => scb attached to pending promise
pendingPromise.then(function(data){
    console.log("Inside then ka callback i.e scb");
    console.log(data);
    console.log(pendingPromise);
});


// failure callback => fcb attached to pending promise
pendingPromise.catch( function(error){
    console.log("Inside catch ka callback i.e fcb");
    console.log(error);
    console.log(pendingPromise);
});
