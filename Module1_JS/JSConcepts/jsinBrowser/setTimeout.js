

// console.log("Start !!!"); 

// // it will guaranteed run after 5 seconds (this statement is invalid)
// setTimeout(function(){
//     console.log("I ran after 5 seconds !!!");
// } , 5000 );


// console.log("End !!!");


// let startTime = new Date().getTime(); //5000
// // console.log(startTime);
// let endTime = startTime; // 5000
// // 5000 <= 15000
// // run for 10 seconds !!!
// while(endTime <= startTime + 10000){
//     endTime = new Date().getTime();
// }

// console.log("while ended !!");


// setTimeout with Closures
var idx = 5;
function callMe(){
    setTimeout( cb , 5000);
    function cb(){
        console.log(idx);
    }
}
callMe();

