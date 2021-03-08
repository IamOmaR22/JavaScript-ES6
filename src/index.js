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

// #####-----###-----#####  const End  #####-----###-----#####






// #####-----###-----#####  var Start  #####-----###-----#####

// var a = 10;

// if (true) {
//     var a = 20;
//     console.log(a);  // output 20
// }

// console.log(a);   // Outside of if. Output 20, because variable a replaced by 20.

// #####-----###-----#####  var End  #####-----###-----#####






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






// #####-----###-----#####  Enhance Object Start  #####-----###-----#####

// let name = 'I am Learning Enhance Object';

// let email = 'enhance.object@gmail.com';

// const Cat = {
//     name: name,  // ES5 Rules. In ES5, we write like this. key: value
//     name,   // In ES6, Just write one property.
//     email,

//     print () {   // Function. No need to write function keyword to declare a function. Just write ().
//         console.log(this.name, this.email);
//     }
// }

// Cat.print();

// console.dir(Cat);   // To see the Object on Console. 

// #####-----###-----#####  Enhance Object End  #####-----###-----#####






// #####-----###-----#####  Destructuring Array And Object Details Start  #####-----###-----#####

// Destructuring allows you to extract data from arrays and objects into distinct variables.


// // Destructuring arrays [Extracts data from an array]

// const arr = [25, 60, 75];

// // var a = [0]  // ES5. Output 25 
// // var b = [2]  // ES5. Output 75

// let [a, b, c] = arr;  // ES6. a for first one, b for second one, c for third one, d for ...... Output 25 60 75
// // let [a, , c] = arr;  // ES6. Output 25 75. But we need keep empty for 60. Like - , ,

// console.log(a);
// console.log(c);
// console.log(b);

// // Another Example For Destructuring arrays [Extracts data from an array]

// const iceCreamFlavors = ['hazelnut', 'pistachio', 'tiramisu'];

// const [flavor1, flavor2, flavor3] = iceCreamFlavors;
// // const [flavor1, , flavor3] = iceCreamFlavors;   // will simply ignore flavor2.

// console.log(flavor1, flavor2, flavor3);




// // Destructuring objects [Extracts data from an object]

// const obj = {
//     name: 'Twinkle Cats',
//     email: 'twinkle.cats@gmail.com'
// }

// let {name, email} = obj;  // ES6

// // let name = obj.name;    // ES5 
// // let email = obj.email;  // ES5

// console.log(name, email);


// // Another Example For Destructuring objects [Extracts data from an object]

// const meal = {  recipe: 'pizza',  type: 'marinara',  price: 6.25};

// const {recipe, type, price} = meal;
// // const {type} = meal;   // will only select the type property from the meal object.

// console.log(recipe, type, price);




// Used Function for Object [Must need to follow the orders of object while use simple parameter]

// const obj = {
//     name: 'Twinkle Cats',
//     email: 'twinkle.cats@gmail.com'
// }

// let {name, email} = obj;
// console.log(name, email);

// function print(name, email) {
//     console.log(`Hello ${name}; Email: ${email}`);
// }
// // Must need to follow the order when we work with simple parameter.
// print(name, email)  // Output Hello Twinkle Cats; Email: twinkle.cats@gmail.com
// print(email, name)  // Output Hello twinkle.cats@gmail.com; Email: Twinkle Cats


// Used Function for Destructuring Object [No need to follow the order. We don't have to tell where to pass. Just pass an an object]

// const obj = {
//     name: 'Twinkle Cats',
//     email: 'twinkle.cats@gmail.com'
// }

// let {name, email} = obj;
// console.log(name, email);

// function print({name, email}) {   // Use {} to pass as an object.
//     console.log(`Hello ${name}; Email: ${email}`);
// }
// // No need to follow the order. But, Need to pass as an object.
// print({name, email})  // Output Hello Twinkle Cats; Email: twinkle.cats@gmail.com
// print({email, name})  // Output Hello Twinkle Cats; Email: twinkle.cats@gmail.com

// #####-----###-----#####  Destructuring Array And Object Details End  #####-----###-----#####






// #####-----###-----#####   Default Parameter, Rest And Spread Operator Details Start  #####-----###-----#####

// // Default Parameter

// // Default Parameter allows you to set default values for your function parameters if no value is passed or if undefined is passed.

// let add = (a, b) => a+b;  // Simple Arrow Function 

// console.log(add(10));  // Need to pass two arguments. If we pass one argument then it will give NaN (Not a number). Because, undefined+number=Nan


// // Don't pass argument and Set a default value [Default Parameter]

// let sqr = (a, b=1) => a*b;  // If we didn't pass the value of b. Then we can give a default value. Like b=1
// console.log(sqr(10));  // We just passed one argument. Output 10.


// let sqr = (p, q=p) => p*q;   // Set default p for q. It will work as a square logic.
// console.log(sqr(10));  // We just passed one argument. Output 100.


// let sqr = (x=1, y=x) => x*y;   // Set by default value if we don't want to pass argument or we can set by default.
// console.log(sqr(10));  // We just passed one argument. Output 100.
// console.log(sqr(10, 5));  // We just passed one argument. Output 50.





// Rest Operator/Parameter (...). By using Rest (...) operator/parameter , arguments will go inside the array.

// // Rest parameter: Collects all remaining elements into an array.

// function sum (...num) {  // We don't know the exact number to pass. That's why we are using Rest operator/parameter . ...num is an array. Need add all the number.
//     console.log(num);   // Empty array. Because we didn't pass any arguments. Output will be an Empty array.
// }

// sum();


// function sum2 (...num) {  // We don't know the exact number to pass. That's why we are using Rest operator/parameter . ...num is an array. Need add all the number.
//     console.log(num);   // Empty array. We can pass arguments as much as we want.
// }

// sum2(10, 11, 35, 40);  // Pass arguments. Whatever we pass, it will go inside the array.
// // sum2([10, 20, 30]);  // We are passing arguments, not array. If we pass array then the array will go inside the array.


// // Do Sum using Rest Operator/Parameter 

// function doSum (...num) {
//     return num.reduce((a, b) => a+b);
// }

// let totalSum = doSum(10, 20, 30, 40, 50);  // 10+20+30+40+50=150
// console.log(totalSum);






// // Spread Operator (...). The Spread Operator allows us to expand elements. Spread Operators however, let us unpack elements in an array to single/individual arguments

// // Spread operator: Allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements/variables.

// var arr = [1, 2, 3, 4];

// console.log(arr);      // Output will be an array.
// console.log(...arr);   // Output will be single arguments/elements/variables. Because of Spread Operator.


// // Destructuring

// var arr2 = [1, 2, 3, 4];

// arr2 = [...arr2, 125, 540, 980]

// console.log(arr2);


// // Objects

// var obj = {
//     name: 'Sky Blue',
//     email: 'blue.sky@gmail.com'
// }

// var obj2 = {
//     ...obj,    // It will copy the obj (previous obj)
//     name: 'Md .Omar Faruk',   // It will not create new name. It will Override the previous name. 
//     age: 24   // We can add new property also.
// }

// console.log(obj2);

// #####-----###-----#####   Default Parameter, Rest And Spread Operator Details End  #####-----###-----#####






// #####-----###-----#####   Module System in Details Start  #####-----###-----#####

// Module -- We can do many work in separate file and we can join them in one place. A module can contain variables and functions.


// // Import function as math object. When we use * it will take all the functions from math.js.
// import * as math from './math';  // When we use * we need to receive them as an object. That's why i have used as math. math object will take all the functions.

// console.log(math);  // It will give output as object. In math object we have add, sub function.

// console.log(math.add(10, 20));   // It will give the add output
// console.log(math.sub(150, 20));  // It will give the sub output




// // Import function using destructuring  -- Suppose we have 10 function in math.js, but we need to import 4/5/8 etc.. Then we need to use destructuring.

// import {add, div, mod} from './math'

// console.log(mod(10, 3));
// console.log(add(11, 9));

// #####-----###-----#####   Module System in Details End  #####-----###-----#####






// #####-----###-----#####   Classes in Details Start  #####-----###-----#####

// import Person from './person'

// let p1 = new Person('Md. Omar Faruk', 'omar.faruk@gmail.com')  // Now we can call all the method from Person class by p1.

// console.log(p1.name);

// p1.print()  // Call the print method.

// #####-----###-----#####   Classes in Details End  #####-----###-----#####






// #####-----###-----#####   Classes And Inheritance Start  #####-----###-----#####

// // We will use the teacher.js and student.js file for this. [Create a file called student.js in src folder]

// // We will inherit Teacher class through another Student class.

// // Now we will import here the Student class, not Teacher class. Because, we have inherited the Teacher class into Student class.

// import Student from './student'

// let st1 = new Student('Biki', 'biki@gmail.com', '8550');

// st1.welcome()

// #####-----###-----#####   Classes And Inheritance End  #####-----###-----#####