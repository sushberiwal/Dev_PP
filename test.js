// let values = [1,2,3,4,5,6];

// let count = 1;
// let reducedValues = values.reduce(function(total , elem , index , array){
//     total += elem;
//     if(index == values.length-1){
//         total = total/values.length;
//     }
//     return total;
// })
// console.log(reducedValues);

// q4
// let obj = {
//     newObj: {
//       obj2: {
//         obj5: {
//           one: 1,
//         },
//       },
//     },
//     obj3: {
//       obj4: { two: 2 },
//     },
//   };

let obj = {
  name: {
    first: "robin",
    last: "negi",
  },
  address: {
    city: {
      name: "Gwalior",
    },
    landmark: "Badri Marg",
    street: "22",
  },
};

obj = {
  flavor: "vanilla",
  topping: {
    drizzle: "chocolava",
    sprinkle: "choco-chips",
  },
  cone: {
    type: "waffle",
    crust: {
      color: "dark",
      texture: "soft",
    },
  },
};

//{ 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }
let flatObj = {};
function flatThatObject(obj, flatObj, keyTillNow) {
  for (key in obj) {
    if (typeof obj[key] == "object") {
      flatThatObject(obj[key], flatObj, keyTillNow + key + ".");
    } else {
      let myKeyTillNow = keyTillNow + key;
      flatObj[myKeyTillNow] = obj[key];
    }
  }
}

// flatThatObject(obj , flatObj , "");

// console.log(flatObj)

// Q5 ->
let arr = [1, 2, 3];
// (function () {
//   for (x in arr){
//     //   console.log(x);
//     arr.unshift(arr.pop());    
//    } 
//   console.log(arr);
// })();

let randomAdder = function (arr = ["a", "b"]) {
  arr[arr.length * arr.length] = arr.length * arr.length;
};

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]);
// console.log(arr[8]);
// console.log(arr);


//Q6 =>
// (function () {
//     if ( (-100 && 100 && "0") || [] === true || 0) {
//       console.log(1);
//       if ([] || (0 && false)) {
//         console.log(2);
//       }
  
//       if (Infinity && NaN && "false") {
//         console.log(3);
//         if ("") {
//           console.log(4);
//         }
//       } else {
//         console.log(5);
//         if (({} || false === "") && !(null && undefined)) {
//           console.log(6);
//         }
//       }
//     } else {
//       console.log(7);
//     }
//   })();


// Q7
// let a = "This only works if and only if";
// // console.log(a.indexOf("only"));
// let b = a.slice(a.indexOf("only")); //only works if and inly if
// console.log(b);

// let c = b.lastIndexOf("only"); // 18
// console.log(c);
// b[c] = "i";
// console.log(a); // "This only works if and only if"
// console.log(b); // "only works if and inly if"

//q10
// function f() {
//     console.log(arguments);
//   }
  
//   function f(a, b) {
//     return a + b;
//   }
  
//   console.log( f(2, 3, 4, 5) );
  
//   function f(x, y, z, t) {
//       return x + y + z + t;
//   }
  
//   console.log(f(2, 3, 4, 5));

// q11
// console.log(a);

// f(2, 3, 4, 5);

// var a = 1;
// var a = 2;

// console.log(a);
// console.log(b);

// let b = 2;

// function f() {
//   console.log(arguments);
// }

//undefined

// Q12

// obj = {"concept":""};
// console.log(
//   JSON.parse(
//     JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//   ).concept
// );


let a;

console.log(a);

function A() {
  let a = 2;
  console.log(a);

  function C() {
    console.log(a);

    function D() {
      console.log(a);

      a = 2;
    }
    D();
    a = 3;
  }
  C();
}

function B() {
  let a;
  console.log(a);
  
  function E() {
    a = 6;
    console.log(a);
  }
  
  a = 2;
  E();
  console.log(a);
}

function F() {
  console.log(a);
  a = 2;
}

a = 3;

F();
B();
A();


// undefined
// 3
// undefined
// 6
// 6
// 2
//2
// 2