// output anything on console
// console.log("Hello World !!!");

// top to down
// left to right

// Traditional =>
// Data Types => int , char , string , double , float , boolean , big int , long ,

// Javascript => Number(int , double , float , big int , long) , Boolean(true , false)
//               String ('a' , "kajsbfjkasf") , undefined , Object ()

// java , cpp => variables

// Datatype VariableName = Value;
// int a = 10;

// ES6 => Ecma Script 6
// let => block scoped variable
// const => block scoped variable

let a = 10;
let b = true;
let c = false;
let d = undefined;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// variable is not assigned a value
let e; // takes up undefined
// console.log(e);

if (true) {
  // let f = "I am inside if block !!!";
  // console.log(f);
  // console.log(a);
  // a = 20;
}

// Const => Constant

const pi = 3.14; // define
// pi = 20; // resassignment is not allowed in const
// console.log(pi);

// == (data type check nhi hota )  && === (data type check hota hai !!);
// console.log(  10 === "10" );

// Objects => key value pairs

// let movies = {}; // empty object

let data = {
  name: "Steve Rogers",
  place: "Queens",
  values: [
    10,
    false,
    {
      name: "Steve Rogers",
      place: "Queens",
    },
    "Hey i am a value",
    [1, 2, 3, 4, 5, 6],
  ],
  movies : {
      name:"Captain America",
      rating:10
  }
};

// {
//     name:"Captain America",
//     rating:10
// }


// access object keys
// dot notation => literal check
// console.log(data.name);
// console.log(data.place);

let key = "name";
data.key;
// console.log( key );

// bracket notation
// console.log(data[key]);

data.name = "I am a new Value";
// console.log(data);

// keys => unique
// values => duplicate

// Arrays

// int arr[] = [10,20,30,50];
// int arr[] = new int[10];

// array => pop , push , shift , unshift , slice
let values = [
  10,

  false,

  {
    name: "Steve Rogers",
    place: "Queens",
  },
  "Hey i am a value",
  [1, 2, 3, 4, 5, 6],
];

// console.log(values);
// console.log(values[2].place);


// in loop
for( let key in data ){
    console.log(key);
}

for(let i=0 ; i<100 ; i++){
    console.log(i);
}
//
