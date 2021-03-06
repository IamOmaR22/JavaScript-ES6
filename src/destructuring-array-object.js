/*
The two most used data structures in JavaScript are Object and Array.

    1. Objects allow us to create a single entity that stores data items by key.
    2. Arrays allow us to gather data items into an ordered list.

Although, when we pass those to a function, it may need not an object/array as a whole. It may need individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
*/



// Destructuring allows you to extract data from arrays and objects into distinct variables.


// Destructuring arrays [Extracts data from an array]

const arr = [25, 60, 75];

// var a = [0]  // ES5. Output 25 
// var b = [2]  // ES5. Output 75

let [a, b, c] = arr;  // ES6. a for first one, b for second one, c for third one, d for ...... Output 25 60 75
// let [a, , c] = arr;  // ES6. Output 25 75. But we need keep empty for 60. Like - , ,

console.log(a);
console.log(c);
console.log(b);

// Another Example For Destructuring arrays [Extracts data from an array]

const iceCreamFlavors = ['hazelnut', 'pistachio', 'tiramisu'];

const [flavor1, flavor2, flavor3] = iceCreamFlavors;
// const [flavor1, , flavor3] = iceCreamFlavors;   // will simply ignore flavor2.

console.log(flavor1, flavor2, flavor3);




// Destructuring objects [Extracts data from an object]

const obj = {
    name: 'Twinkle Cats',
    email: 'twinkle.cats@gmail.com'
}

let {name, email} = obj;  // ES6

// let name = obj.name;    // ES5 
// let email = obj.email;  // ES5

console.log(name, email);


// Another Example For Destructuring objects [Extracts data from an object]

const meal = {  recipe: 'pizza',  type: 'marinara',  price: 6.25};

const {recipe, type, price} = meal;
// const {type} = meal;   // will only select the type property from the meal object.

console.log(recipe, type, price);




// Used Function for Object [Must need to follow the orders of object while use simple parameter]

const obj = {
    name: 'Twinkle Cats',
    email: 'twinkle.cats@gmail.com'
}

let {name, email} = obj;
console.log(name, email);

function print(name, email) {
    console.log(`Hello ${name}; Email: ${email}`);
}
// Must need to follow the order when we work with simple parameter.
print(name, email)  // Output Hello Twinkle Cats; Email: twinkle.cats@gmail.com
print(email, name)  // Output Hello twinkle.cats@gmail.com; Email: Twinkle Cats


// Used Function for Destructuring Object [No need to follow the order. We don't have to tell where to pass. Just pass an an object]

const obj = {
    name: 'Twinkle Cats',
    email: 'twinkle.cats@gmail.com'
}

let {name, email} = obj;
console.log(name, email);

function print({name, email}) {   // Use {} to pass as an object.
    console.log(`Hello ${name}; Email: ${email}`);
}
// No need to follow the order. But, Need to pass as an object.
print({name, email})  // Output Hello Twinkle Cats; Email: twinkle.cats@gmail.com
print({email, name})  // Output Hello Twinkle Cats; Email: twinkle.cats@gmail.com