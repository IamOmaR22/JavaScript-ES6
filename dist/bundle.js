/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const a = 10;\n// const b = 20;\n// const sum = (a, b) => a+b;   // Arrow function. We can declare variable using constant.\n// console.log(sum(a, b));\n// ###--### const ###--### \n// const x = 10;\n// x = 25;  // We can't override x variable because we have used x variable as const.  \n// console.log(x);\n// const arr = [];  // Empty array.\n// arr.push(10);\n// arr.push(14);\n// // arr = [];  // We can't do this. Because we have used arr variable as a constant. \n// console.log(arr);\n// ###--### var ###--### \n// var a = 10;\n// if (true) {\n//     var a = 20;\n//     console.log(a);  // output 20\n// }\n// console.log(a);   // Outside of if. Output 20, because variable a replaced by 20.\n// ###--### let ###--### \n// let a = 10;\n// if (true) {\n//     let a = 20;\n//     console.log(a);  // output 20\n// }\n// console.log(a);   // Outside of if. Output 10. Because variable a was declared 10 outside of if block.\n// Block - Block means an opening and closing curly bracket {}. \nfunction demo() {\n  {\n    var _x = 10;\n    {\n      var _x2 = 15;\n      console.log(_x2); // Output 15\n      // x = 20;   // We can't override x variable here. But we can do this after this block {}.\n    }\n    _x = 20;\n    console.log(_x); // Output 20\n  }\n}\n\ndemo(); // call the function\n// #####-----###-----#####  let  vs  var  #####-----###-----#####\n\nfunction demovar() {\n  {\n    var x = 10;\n    {\n      var _x3 = 15;\n      console.log(_x3); // Output 15\n      // x = 20;   // We can't override x variable here. But we can do this after this block {}.\n    }\n    x = 35;\n    console.log(x); // Output 35\n  }\n  console.log(x); // Output 35. Because we can access var x from outside of the block.\n}\n\ndemovar(); // call the function\n\nfunction demolet() {\n  {\n    var _x4 = 10;\n    {\n      var _x5 = 15;\n      console.log(_x5); // Output 15\n      // x = 20;   // We can't override x variable here. But we can do this after this block {}.\n    }\n    _x4 = 20;\n    console.log(_x4); // Output 20\n  }\n  console.log(x); // x is not defined. From outside of the block we can't access this let variable.\n}\n\ndemolet(); // call the function\n\n//# sourceURL=webpack://JavaScript-ES6/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;