let values = [1,2,3,4,5,6,7,8,9];

let even = values.filter(function(value){
    if(value % 2 == 0){
        return true;
    }
    return false;
})

console.log(even);