//#region switch case
// let a = 3;
// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Hello World");
//     break;
//   case 4:
//   case 5:
//   case 12:
//     console.log("Hi");
//     break;
// }

//#endregion

//#region ternary operator
// let a = 4;
// let b = a >= 5 ? 2 : 3;
// console.log(b);
//#endregion

//#region "use strict"
// let fun = function() {
//   "use strict";
//   a = 1; //error
//   console.log(a);
// };
// fun();
//#endregion

//#region  IIFE
//(function show() {
//  var a = 1;
//  console.log(a);
//})();
//var a = 2;
//console.log(a);

//#endregion

//#region Closure
// function fun1(outer) {
//   function fun2(inner) {
//     return outer + inner;
//   }
//   return fun2;
// }

// var exe = fun1(5);
// console.log(exe(7));
//#endregion

//#region  reversing string "immutable type" by using arrays!
var w = "hello";

var c = Array.from(w).reverse();
console.log(c.join(""));
//#endregion
