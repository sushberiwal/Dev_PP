const fs = require("fs");


function myPromisifiedFun(filePath){
    return new Promise(function(resolve , reject){
        
        fs.readFile(filePath , function(error , data){
            if(error){
                // if file data failed ??
                reject(error); // it will invoke fcb => failure callback
            }
            else{
                // if got file data
                resolve(data); // it will invoke scb => success callback
            }
        })
    
    });
}



// Promise<Pending>
let pendingPromise = myPromisifiedFun("./f1.txt");

pendingPromise.then(function(data){
    console.log(data+"");
})

pendingPromise.catch(function(error){
    console.log(error);
})