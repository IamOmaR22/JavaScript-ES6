// Documentation Link of Default Parameter  --  https://dev.to/sarah_chima/default-parameters-in-es6-blc

// Default Parameter

// Default Parameter allows you to set default values for your function parameters if no value is passed or if undefined is passed.

let add = (a, b) => a+b;  // Simple Arrow Function 

console.log(add(10));  // Need to pass two arguments. If we pass one argument then it will give NaN (Not a number). Because, undefined+number=Nan


// Don't pass argument and Set a default value [Default Parameter]

let sqr = (a, b=1) => a*b;  // If we didn't pass the value of b. Then we can give a default value. Like b=1
console.log(sqr(10));  // We just passed one argument. Output 10.


let sqr = (p, q=p) => p*q;   // Set default p for q. It will work as a square logic.
console.log(sqr(10));  // We just passed one argument. Output 100.


let sqr = (x=1, y=x) => x*y;   // Set by default value if we don't want to pass argument or we can set by default.
console.log(sqr(10));  // We just passed one argument. Output 100.
console.log(sqr(10, 5));  // We just passed one argument. Output 50.






// Rest Operator/Parameter (...). By using Rest (...) operator/parameter , arguments will go inside the array.

// Rest parameter: Collects all remaining elements into an array.

function sum (...num) {  // We don't know the exact number to pass. That's why we are using Rest operator/parameter . ...num is an array. Need add all the number.
    console.log(num);   // Empty array. Because we didn't pass any arguments. Output will be an Empty array.
}

sum();


function sum2 (...num) {  // We don't know the exact number to pass. That's why we are using Rest operator/parameter . ...num is an array. Need add all the number.
    console.log(num);   // Empty array. We can pass arguments as much as we want.
}

sum2(10, 11, 35, 40);  // Pass arguments. Whatever we pass, it will go inside the array.
// sum2([10, 20, 30]);  // We are passing arguments, not array. If we pass array then the array will go inside the array.


// Do Sum using Rest Operator/Parameter 
function doSum (...num) {
    return num.reduce((a, b) => a+b);
}

let totalSum = doSum(10, 20, 30, 40, 50);  // 10+20+30+40+50=150
console.log(totalSum);







// Spread Operator (...). The Spread Operator allows us to expand elements. Spread Operators however, let us unpack elements in an array to single/individual arguments

// Spread operator: Allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements/variables.

var arr = [1, 2, 3, 4];

console.log(arr);      // Output will be an array.
console.log(...arr);   // Output will be single arguments/elements/variables. Because of Spread Operator.


// Destructuring
var arr2 = [1, 2, 3, 4];

arr2 = [...arr2, 125, 540, 980]

console.log(arr2);


// Objects
var obj = {
    name: 'Sky Blue',
    email: 'blue.sky@gmail.com'
}

var obj2 = {
    ...obj,    // It will copy the obj (previous obj)
    name: 'Md .Omar Faruk',   // It will not create new name. It will Override the previous name. 
    age: 24   // We can add new property also.
}

console.log(obj2);
