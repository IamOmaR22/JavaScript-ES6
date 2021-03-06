// For Normal Function with Lexical this
const obj = {
    name: 'Fashion Garden',
    print: function () {
        console.log(this);   // It will print {name: "Fashion Garden", print: ƒ}
    }
}

obj.print();



const obj2 = {
    name: 'Omar Faruk',
    print: function () {
        setTimeout(function() {
            console.log(this);    // It will give the window object as an output.
        }, 1000);  // Time out 1 second.
    }
}

obj2.print();


// If we want to get the object reference from inside the print function through this keyword, then we need to do the bind with this.

const obj3 = {
    name: 'Omar Faruk',
    print: function () {
        setTimeout(function() {
            console.log(this);    // It will give the window object as an output.
        }.bind(this), 1000);  // Time out 1 second.
    }
}

obj3.print();



// For Arrow Function with Lexical this
const obj4 = {
    name: 'Omar Faruk',
    print: function () {
        setTimeout(() => {
            console.log(this);    // It will give the object as an output. No need to use bind.
            console.log(this.name);    // It will give name as an output.
        }, 1000);  // Time out 1 second.
    }
}

obj4.print();