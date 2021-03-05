// const a = 10;
// const b = 20;

// const sum = (a, b) => a+b;   // Arrow function. We can declare variable using constant.

// console.log(sum(a, b));





// #####-----###-----#####  const Start  #####-----###-----#####

// const x = 10;

// x = 25;  // We can't override x variable because we have used x variable as const.  

// console.log(x);


// const arr = [];  // Empty array.

// arr.push(10);
// arr.push(14);

// // arr = [];  // We can't do this. Because we have used arr variable as a constant. 
 
// console.log(arr);


// ###--### var ###--### 

// var a = 10;

// if (true) {
//     var a = 20;
//     console.log(a);  // output 20
// }

// console.log(a);   // Outside of if. Output 20, because variable a replaced by 20.

// #####-----###-----#####  const End  #####-----###-----#####






// #####-----###-----#####  let Start  #####-----###-----#####

// let a = 10;

// if (true) {
//     let a = 20;
//     console.log(a);  // output 20
// }

// console.log(a);   // Outside of if. Output 10. Because variable a was declared 10 outside of if block.



// Block - Block means an opening and closing curly bracket {}. 

// function demo() {
//     {
//         let x = 10;

//         {
//             const x = 15;
//             console.log(x);   // Output 15

//             // x = 20;   // We can't override x variable here. But we can do this after this block {}.
//         }

//         x = 20;
//         console.log(x);   // Output 20
//     }
// }

// demo();  // call the function

// #####-----###-----#####  let End  #####-----###-----#####






// #####-----###-----#####  var  vs  let Start  #####-----###-----#####

// function demovar() {
//     {
//         var x = 10;

//         {
//             const x = 15;
//             console.log(x);   // Output 15

//             // x = 20;   // We can't override x variable here. But we can do this after this block {}.
//         }

//         x = 35;
//         console.log(x);   // Output 35
//     }
//     console.log(x);   // Output 35. Because we can access var x from outside of the block.
// }

// demovar();  // call the function


// function demolet() {
//     {
//         let x = 10;

//         {
//             const x = 15;
//             console.log(x);   // Output 15

//             // x = 20;   // We can't override x variable here. But we can do this after this block {}.
//         }

//         x = 20;
//         console.log(x);   // Output 20
//     }
//     console.log(x);   // x is not defined. From outside of the block we can't access this let variable.
// }

// demolet();  // call the function

// #####-----###-----#####  var  vs  let End  #####-----###-----#####







// #####-----###-----#####  Template String and Multi Line String Start  #####-----###-----#####

// Template string - The way of declare a string. We can declare variable inside the string in this way. Also we can make multi line string.


// const name = 'Md Omar Faruk';
// const age = 24;
// const email = 'omar_faruk@gmail.com';

// // const details = 'Name: ' + name + ' Age: ' + age + ' Email: ' + email    // Using of + is very tiresome work. That's why we will use template string.

// // Template string. We will do it by using backtick (``). Inside backtick, we can write how much we want and where we want. It will also count the spaces.
// const details = `   
//     Name: ${name} Age: ${age} 
//     Email: ${email}
// `

// const details2 = `Name: ${name} Age: ${age} Email: ${email}`  // Whatever I write inside the backtick will be included in the template string.

// console.log(details);
// console.log(details2);

// console.log('Automatic update the server after applying some changes..');

// alert('Webpack is Awesome and Learn it..')

// #####-----###-----#####  Template String and Multi Line String End  #####-----###-----#####








// #####-----###-----#####  Function Start  #####-----###-----#####

// Normally we declare the function in two ways.

// Normal Function

// function a() {
//     // function body
// }


// // Anonymous Function

// var a = function() {
//     // function body
// }

// #####-----###-----#####  Function End  #####-----###-----#####







// #####-----###-----#####  Arrow Function Start  #####-----###-----#####

// // Arrow function is the short cut method/system of function declaration.

// // Without argument
// const print = () => {
//     console.log('Hello Arrow Function');
// }

// print();


// // With argument
// const print2 = (name) => {   // If we pass one argument, then we can write the argument without ()  -- like const print2 = name => { }.
//     console.log('Hello Arrow Function', name);
// }

// print2('Md. Omar Faruk');


// // With 2 arguments. Let's see the next example.
// const addMe2 = (a, b) => {
//     return a + b;
// }
// console.log(addMe2(10, 15));
// addMe2();


// // When we return something, we don't need {} and return in ES6. Let's see the example. With 2 arguments.

// const addMe = (a, b) => a + b;

// console.log(addMe(15, 35));


// // Square of a number

// const sqr = x => x*x;   // Because of one argument, no need to use ().

// console.log(sqr(10));

// #####-----###-----#####  Arrow Function End  #####-----###-----#####






// #####-----###-----#####  Lexical This Start  #####-----###-----#####


// // For Normal Function with Lexical this

// const obj = {
//     name: 'Fashion Garden',
//     print: function () {
//         console.log(this);   // It will print {name: "Fashion Garden", print: ƒ}
//     }
// }

// obj.print();



// const obj2 = {
//     name: 'Omar Faruk',
//     print: function () {
//         setTimeout(function() {
//             console.log(this);    // It will give the window object as an output.
//         }, 1000);  // Time out 1 second.
//     }
// }

// obj2.print();


// // If we want to get the object reference from inside the print function through this keyword, then we need to do the bind with this.

// const obj3 = {
//     name: 'Omar Faruk',
//     print: function () {
//         setTimeout(function() {
//             console.log(this);    // It will give the window object as an output.
//         }.bind(this), 1000);  // Time out 1 second.
//     }
// }

// obj3.print();





// // For Arrow Function with Lexical this

// const obj = {
//     name: 'Omar Faruk',
//     print: function () {
//         setTimeout(() => {
//             console.log(this);    // It will give the object as an output. No need to use bind.
//             console.log(this.name);    // It will give name as an output.
//         }, 1000);  // Time out 1 second.
//     }
// }

// obj.print();

// #####-----###-----#####  Lexical This End  #####-----###-----#####