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


const name = 'Md Omar Faruk';
const age = 24;
const email = 'omar_faruk@gmail.com';

// const details = 'Name: ' + name + ' Age: ' + age + ' Email: ' + email    // Using of + is very tiresome work. That's why we will use template string.

// Template string. We will do it by using backtick (``). Inside backtick, we can write how much we want and where we want. It will also count the spaces.
const details = `   
    Name: ${name} Age: ${age} 
    Email: ${email}
`

const details2 = `Name: ${name} Age: ${age} Email: ${email}`  // Whatever I write inside the backtick will be included in the template string.

console.log(details);
console.log(details2);

console.log('Automatic update the server after applying some changes..');

alert('Webpack is Awesome and Learn it..')

// #####-----###-----#####  Template String and Multi Line String End  #####-----###-----#####