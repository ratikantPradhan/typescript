"use strict";
const greet = "Hello everyone!";
console.log(greet);
//In TypeScript, const and let declarations have block scope, which means they are only accessible within the block they are declared
let greeting = "Hello dear!";
console.log(greeting);
greeting = "Good evening"; // This is allowed with let
//tsc ts_to_js.ts -w
//  NOTE  : -w ->This option stands for "watch". It tells the compiler to watch the input file for changes and recompile it automatically whenever changes are detected.
let a = 12;
let b = "6";
let c = 2;
let male = false;
console.log(a + b); //
console.log(a + Number(c));
//console.log(a / b);
//console.log(c * b);
