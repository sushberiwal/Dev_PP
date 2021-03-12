const fs = require("fs");


console.log("start");


// async functions => accepts callback

fs.readFile( "./f1.txt" , function cb(error , data){
        console.log(data);
});


console.log("end");

