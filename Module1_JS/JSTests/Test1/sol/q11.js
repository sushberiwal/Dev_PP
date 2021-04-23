
console.log(a);

f(2, 3, 4, 5);

var a = 1;
var a = 2;
console.log(a);
console.log(b);
let b = 2;

function f() {
  console.log(arguments);
}

// undefined
// [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
// 2
// cannot acces b before initialization