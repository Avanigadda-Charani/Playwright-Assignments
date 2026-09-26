"use strict";
// Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative integer, and returns the nth Fibonacci number. 
function fibonacci(n) {
    // if number given is 0 then it return 0
    if (n === 0) {
        return 0;
    }
    //if given number is 1 it return 1
    if (n === 1) {
        return 1;
    }
    //Initialize two variables to store the first two Fibonacci numbers
    let a = 0;
    let b = 1;
    //to store a+b value in c variable
    let c = 0;
    // Using a loop to compute the Fibonacci number and update these iteratively up to `n`. 
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    //return b stores the latest Fibonacci number.
    return b;
}
//validation of different numbers
console.log(fibonacci(3)); // 2
console.log(fibonacci(6)); // 8
console.log(fibonacci(8)); // 21
console.log(fibonacci(0));
console.log(fibonacci(1));
