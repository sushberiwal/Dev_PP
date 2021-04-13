// function globalFunction(x) {
//     return function outerFunction(y) {
//       return function innerFunction(z) {
//         return x + y + z;
//       };
//     };
//   }

  
// let instance1 = globalFunction(2);
// var instance2 = instance1(3);
// console.log(instance2());

// let count = 0;

// let interval = setInterval(function () {
//   console.log(count);
//   count++;
// }, 100);

// setTimeout(function () {
//   clearInterval(interval);
//   interval = setInterval(function () {
//     console.log(count);
//     count--;
//     if (count < 0) clearInterval(interval);
//   });
// }, 500);

// function mySetInterval(callback, time) {
//     let interval = { working: true };
  
//     function setter() {
//       callback();
//       if (interval.working) setTimeout(setter, time);
//     }
//       setTimeout(setter, time);
//       return interval
// }



//   let i = mySetInterval(function () {
//     console.log("Hi");
//   }, 100);
  

//   // to clear interval
//   setTimeout(function () {
//       i.working = false;
//   },500)

let a = ["a", "b"]
a[2] = a 

function f(a) {
    a = a[2]
    console.log(a);
    let n = Array("a", "b")
    console.log(a[2] = n);
    console.log(a);
    console.log(n);
    a = n;
    console.log(a);
}


console.log(a);
f(a)
console.log(a);




