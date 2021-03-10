// Promise - It's a built in object of javascript. We can easily do Asynchronous task by using Promise.


//--//--//  Asynchronous  //--//--//
// At first Hello Omar will print and then I am third and I am Fourth. I am a Timer will print at the end. Never wait for the next Line to be executed.
console.log('Hello Omar');

setTimeout(() => {
    console.log('I am in Timer');
}, 2000)

console.log('I am third');

setTimeout(() =>{
    console.log('I am Fourth');
}, 1000)



//--//--//  Promise //--//--//

let myFirstPromise = new Promise((resolve, reject) =>{   // Promise take a callback function as argument. This arrow function will take 2 arguments as parameter.
    let name = 'Daffodil International University'

    // resolve(name)   // If everything ok then it will be resolved and if error then it will be rejected.

    // We call resolve through setTimeout function to check the Asynchronous
    setTimeout(() => {
        resolve(name)
    }, 2000)
})

console.log(myFirstPromise);

myFirstPromise  // then() and catch() need to write in chain. For better understanding i write them one below the other.
    .then((name) => {    // If everything ok then, then() block will be executed. Also need to pass the argument which we passed through resolve().
        console.log(`I love ${name}`);
    })    
    // .catch((err) => {   // If error occurred then, catch() block will be executed. then() and catch() will take a function as argument.
    //     // We didn't call reject into Promise. That's why we won't need / use catch().
    // })




//--//--//  Promise - From API //--//--//

// let data = fetch('https://jsonplaceholder.typicode.com/users')  // fetch() is a by default api. It will take an url as an argument.
// console.log(data);  // It will give a pending promise



// We can't store Asynchronous code into a variable. It should be Null or Undefined.
fetch('https://jsonplaceholder.typicode.com/users')  // fetch() is a by default api. It will take an url as an argument.
    // .then((response) => {
    //     console.log(response.json());  // It will return a promise.
    // })
    .then((response) => response.json())  // No need console log here. We just simply return the json format of response.
    .then((body) => {
        console.log(body);  // It/body will return a an array.

        body.map(data => console.log(data.name))  // Need filter/map with body to print the names.
    })
    .catch((err) => {
        console.log(err);  // We can check the error by changing/removing something from fetch url.
    })




//--//--//  Print Name, Email, etc On Home Page (index.html) - DOM manipulation - Promise - From API //--//--//

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body) => {
        const lis = body.map(data => {   // lis means list
            let li = document.createElement('li')
            let text = `Name: ${data.name}, Email: ${data.email}`
            let textNode = document.createTextNode(text)

            li.appendChild(textNode)
            return li
        })
        // console.log(lis);
        lis.forEach((li) => {  // We can give any name as argument. We gave li.
            document.getElementById('myList').appendChild(li)  // We append it in ul, which is in index.html file. id name is myList in index.html file.
        });
    })
    .catch((err) => {
        console.log(err);  // We can check the error by changing/removing something from fetch url.
    })

