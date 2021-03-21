
let a = "This only works if and only if";


let b = a.slice( a.indexOf("only") );
// let b = "only works if and only if";

let c = b.lastIndexOf("only");
// 18

// strings are immutable
b[c] = "i"; // not allowed

console.log(a);
console.log(b);
