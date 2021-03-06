let name = 'I am Learning Enhance Object';

let email = 'enhance.object@gmail.com';

const Cat = {
    name: name,  // ES5 Rules. In ES5, we write like this. key: value
    name,   // In ES6, Just write one property.
    email,

    print () {   // Function. No need to write function keyword to declare a function. Just write ().
        console.log(this.name, this.email);
    }
}

Cat.print();

console.dir(Cat);   // To see the Object on Console. 