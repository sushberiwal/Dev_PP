// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y);

// f(x)(y);

function f(x , y){
    if(arguments.length == 2){
        return x*y;
    }
    else{
        return function(y){
            return x*y;
        }
    }
}

// console.log(f(2,5));
console.log(   f(2)(5)   );

