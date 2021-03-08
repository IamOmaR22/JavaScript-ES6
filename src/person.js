// - - - // - - - //   Classes in Details Start   // - - - // - - - //

// We can write method, constructor inside a class. But, we can't write variable inside a class. 

// We can use export before class Person{}. But, i will use export in down because we will export it as default.

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    // get name() {
    //     return this.name
    // }

    // set name(name) {
    //     this.name = name
    // }

    print() {  // print is method/function
        console.log(`Name: ${this.name}, Email: ${this.email}`);   // `` template string.
    }
}

export default Person;

// - - - // - - - //   Classes in Details End   // - - - // - - - //