let fs = require("fs");

let obj = {
    name:"abcd"
}


fs.writeFileSync("./test.json" , JSON.stringify(obj) );