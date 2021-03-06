// Template string - The way of declare a string. We can declare variable inside the string in this way. Also we can make multi line string.


const name = 'Md Omar Faruk';
const age = 24;
const email = 'omar_faruk@gmail.com';

// const details = 'Name: ' + name + ' Age: ' + age + ' Email: ' + email    // Using of + is very tiresome work. That's why we will use template string.

// Template string. We will do it by using backtick (``). Inside backtick, we can write how much we want and where we want. It will also count the spaces.
const details = `   
    Name: ${name} Age: ${age} 
    Email: ${email}
`

const details2 = `Name: ${name} Age: ${age} Email: ${email}`  // Whatever I write inside the backtick will be included in the template string.

console.log(details);
console.log(details2);

console.log('Automatic update the server after applying some changes..');

alert('Webpack is Awesome and Learn it..')