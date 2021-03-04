// const a = 10;
// const b = 20;

// const sum = (a, b) => a+b;   // Arrow function. We can declare variable using constant.

// console.log(sum(a, b));


// ###--### const ###--### 

// const x = 10;

// x = 25;  // We can't override x variable because we have used x variable as const.  

// console.log(x);


// const arr = [];  // Empty array.

// arr.push(10);
// arr.push(14);

// // arr = [];  // We can't do this. Because we have used arr variable as a constant. 
 
// console.log(arr);


// ###--### var ###--### 

// var a = 10;

// if (true) {
//     var a = 20;
//     console.log(a);  // output 20
// }

// console.log(a);   // Outside of if. Output 20, because variable a replaced by 20.


// ###--### let ###--### 

// let a = 10;

// if (true) {
//     let a = 20;
//     console.log(a);  // output 20
// }

// console.log(a);   // Outside of if. Output 10. Because variable a was declared 10 outside of if block.



// Block - Block means an opening and closing curly bracket {}. 

function demo() {
    {
        let x = 10;

        {
            const x = 15;
            console.log(x);   // Output 15

            // x = 20;   // We can't override x variable here. But we can do this after this block {}.
        }

        x = 20;
        console.log(x);   // Output 20
    }
}

demo();  // call the function



// #####-----###-----#####  var  vs  let  #####-----###-----#####

function demovar() {
    {
        var x = 10;

        {
            const x = 15;
            console.log(x);   // Output 15

            // x = 20;   // We can't override x variable here. But we can do this after this block {}.
        }

        x = 35;
        console.log(x);   // Output 35
    }
    console.log(x);   // Output 35. Because we can access var x from outside of the block.
}

demovar();  // call the function


function demolet() {
    {
        let x = 10;

        {
            const x = 15;
            console.log(x);   // Output 15

            // x = 20;   // We can't override x variable here. But we can do this after this block {}.
        }

        x = 20;
        console.log(x);   // Output 20
    }
    console.log(x);   // x is not defined. From outside of the block we can't access this let variable.
}

demolet();  // call the function