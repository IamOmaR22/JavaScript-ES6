let a = 10;

if (true) {
    let a = 20;
    console.log(a);  // output 20
}

console.log(a);   // Outside of if. Output 10. Because variable a was declared 10 outside of if block.



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