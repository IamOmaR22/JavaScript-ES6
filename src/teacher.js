// We will inherit Teacher class through another Student class.

class Teacher {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    print() {  // print is method/function
        console.log(`Name: ${this.name}, Email: ${this.email}`);   // `` template string.
    }
}

export default Teacher;