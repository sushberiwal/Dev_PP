var a = 10;

function sayHi(){
    console.log("Inside say Hi !!!");
    console.log(a);
    var b = 200;
    function sayHello(){
        console.log("Inside say Hello !!!");
        console.log(b);
    }
    b = 1000; 
    return sayHello;
}

var sayHello = sayHi();
sayHello();