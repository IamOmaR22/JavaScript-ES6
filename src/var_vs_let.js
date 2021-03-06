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