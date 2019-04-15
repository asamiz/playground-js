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
// var w = "hello";

// var c = Array.from(w).reverse();
// console.log(c.join(""));
//#endregion

// shallow copy Vs. Deep Copy!
//#region shallow copy
// let arr = [1, 2, 3];
// let arrCopied = arr;
// arrCopied.push(4);
// console.log(arr, arrCopied);
//#endregion

// #region Deep Copy
// let arr = [1, 2, 3];
// let arrCopied = [...arr];
// arrCopied.push(4);
// console.log(arr, arrCopied);
//#endregion

//#region Spread operators
// let arr = [1, 2, 3, 4, 5, 6];
// const max = arr => {
//   return Math.max(...arr);
// };

// console.log(max(arr));
//#endregion

//#region  Caalbacks

// first let's see callBacks
// const delay = (callback, duration) => {
//   setTimeout(() => {
//     callback();
//   }, duration);
// };

// delay(() => {
//   console.log("First Done!");
// }, 500);

// // this function will be executed before the first one!
// delay(() => {
//   console.log("second Done!");
// }, 200);

// To solve the problem we have to nest the function inside each other (callbackhell) or (DOOM)
// delay(() => {
//   console.log("First Done!");
//   delay(() => {
//     console.log("second Done!");
//   }, 200);
// }, 500);

//#endregion

//#region  Don't forget to use Number.isNaN() not isNan
// console.log(Number.isNaN("foo"));
//#endregion

//#region  JS has Infinity and -Infinity Values!
// console.log(-1 / 0); // Infinity
// console.log(-1 / 0); // Infinity
// console.log(1 / -Infinity); // zero
// console.log(1 / Infinity); // zero

//#endregion

//#region  HackerRank problems
// ----------------1------------------
// function compareTriplets(a, b) {
//   var aliceScore = 0;
//   var bobScore = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       aliceScore++;
//     }
//     if (b[i] > a[i]) {
//       bobScore++;
//     }
//   }
//   return [aliceScore, bobScore];
// }
// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

// --------------------2-------------------

function myFun() {
  console.log(this);
}

myFun2 = () => {
  console.log(this);
};

myFun();
myFun2();

//#endregion
