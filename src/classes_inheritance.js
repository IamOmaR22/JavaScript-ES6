// We will use the teacher.js and student.js file for this. [Create a file called student.js in src folder]

// We will inherit Teacher class through another Student class.

// Now we will import here the Student class, not Teacher class. Because, we have inherited the Teacher class into Student class.

import Student from './student'

let st1 = new Student('Biki', 'biki@gmail.com', '8550');

st1.welcome()



// We can also called the print() method. It will give the output without id.
st1.print()