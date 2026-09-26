"use strict";
// //Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, and returns its factorial. 
// function factorial(n: number): number {
//     let fact: number = 1
//     //factorial is not computed for negative numbers. If a negative number is passed, the function should throw an error. 
//     if (n < 0) {
//         throw new Error("this is negative number cannot give factorial value")
//     }
//     //loop to compute the factorial. Initialize a result variable and multiply it by each integer from 2 up to `n`. 
//     for (let i = 2; i < n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// //example calls to the `factorial` function with different integers to demonstrate the function’s functionality. 
// console.log(factorial(6));
// console.log(factorial(9));
// //using try catch to throw error for negative integers and to catch without error in output
// try {
//     //Include at least one example where an error is thrown due to a negative input. 
//     console.log(factorial(-2));
// } catch (error) {
//     console.log((error as Error).message);
// }
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(10));
