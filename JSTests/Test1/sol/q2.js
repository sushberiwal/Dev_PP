// let and const block scoped
// var => function scoped
var a = 2;
{
  var a = 3;
  {
    var a = 4;
    {
      var a = 5;
      console.log(a);
    }
    console.log(a);
  }
  console.log(a);
}
console.log(a);
