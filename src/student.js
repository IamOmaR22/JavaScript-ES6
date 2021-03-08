// We will inherit the Teacher class here in Student class.

import Teacher from './teacher'

class Student extends Teacher {  // Inheritance - extends className (Which class i want to inherit)
    constructor(name, email, id) {
        super(name, email)   // super means Constructor of super class. Super class is Teacher.
        this.id = id
    }

    welcome() {  // welcome is a method/function
        super.print()   // Call the print method of super class.
        console.log(`ID: ${this.id}`);
    }
}

export default Student;