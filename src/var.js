var a = 10;

if (true) {
    var a = 20;
    console.log(a);  // output 20
}

console.log(a);   // Outside of if. Output 20, because variable a replaced by 20.