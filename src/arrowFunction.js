// Arrow function is the short cut method/system of function declaration.

// Without argument
const print = () => {
    console.log('Hello Arrow Function');
}

print();


// With argument
const print2 = (name) => {   // If we pass one argument, then we can write the argument without ()  -- like const print2 = name => { }.
    console.log('Hello Arrow Function', name);
}

print2('Md. Omar Faruk');


// With 2 arguments. Let's see the next example.
const addMe2 = (a, b) => {
    return a + b;
}
console.log(addMe2(10, 15));
addMe2();


// When we return something, we don't need {} and return in ES6. Let's see the example. With 2 arguments.

const addMe = (a, b) => a + b;

console.log(addMe(15, 35));


// Square of a number

const sqr = x => x*x;   // Because of one argument, no need to use ().

console.log(sqr(10));