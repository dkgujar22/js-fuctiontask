// Arrow function Problems:
// P1: Write an arrow function that doubles the given number

const doubleNum = (num) => num * 2;
console.log(doubleNum(90));

// P2: Convert Celsius to Fahrenheit 
// Formula: F = C * 9/5 + 32

const celToFrahenheit = (cel) => (cel * (9 / 5) + 32);
console.log(celToFrahenheit(100));

// P3: Check if Number is Positive
const checkPositive = (num) => {
    if (num > 0) {
        return "positive"
    }

}
console.log(checkPositive(90));

// ---------------------------------------------------------------------

// Anonymous Function Problems:
// P1: Subtract Two Numbers

const subtract = function (a, b) {
    return a - b;
}

console.log(subtract(3, 2));


// P2: Display a Message

setTimeout(function () {
    console.log(`SUCCESSFULLY LOGIN`);

}, 2000)


// P3: Calculate Area of a Circle
// Area = π × r²

const area = function (rad) {
    return (3.14 * (rad * rad));
}
console.log(area(10));


// ---------------------------------------------------------------

// IIFE Problems:
// P1: Immediately Log a Number
(function () {
    console.log(2);
})()



// P2: IIFE with Parameter
let sum = (function (num1, num2) {
    return `The sum of ${num1} and ${num2} numbers is ${num1 + num2}`
})(2, 4);

console.log(sum);



// P3: Calculate and Show Square (IIFE)

let square = (function (num) {
    return `The square of ${num} is ${num * num}`
})(4)
console.log(square);


// -------------------------------------------------------------
// Closure Problems:
// P1: Create Counter Function

function counter(){
    let count=0;
   return function innercounter(){
        return count++
    }
}
const closure1=counter()
console.log(closure1());
console.log(closure1());
console.log(closure1());




// P2: Secure Password Setter
// Insturctions:Create a function called passwordManager() that with two methods:
// set(newPass) — sets the password
// get() — returns the stored password
// Use a closure so that the password variable is not directly accessible from outside.
// ✅ When calling the get() method, it should return the current password.

// function passwordManager(){
//     return function set(newPass){
//         return function get(){
//             return newPass
//         }
//     }
// }
// const closure2=passwordManager()
// const closure3=closure2("abcd")
// console.log(closure3());

function passwordManager(){
    let password="";
    return{
         set:(newPass)=>{
         password=newPass;
        
    },
         get : ()=>{
         return password
    }
        
    }
   
}

const manager=passwordManager()
manager.set("abcd");
console.log(manager.get());






// P3: Multiplier Generator
// Instructions:
// Create a function called multiplier(x) that returns another function.
// The returned function should take a number y and return the product of x * y.
// This uses , where x is remembered by the returned inner function.

function multiplier(x){
    return function innerfunction(y){
        return `multiply of ${x} and ${y} is ${x*y}`;
    }


}
const closure=multiplier(5)
console.log(closure(4))


// ---------------------------------------------------------------------

// Recursive Problems:
// P1: Sum of Numbers from 1 to n

const numberSum = (n) => {
    if (n === 1) {
        return 1
    }
    return n + numberSum(n - 1)
}
console.log(numberSum(5));
// 5 + (4 + (3 + (2 + 1))) 


// const factorial=(n)=>{

//     if(n===0){
//         return 1;
//     }
//     return n * factorial(n-1);

//     // return `The factorial of ${n} is ${fact}`;
// }
// console.log(factorial(5));

// P2: Power Function

const powerFunction = (n, p) => {
    if (p === 0) {
        return 1;
    }
    return n * powerFunction(n, p - 1);

}
console.log(powerFunction(3, 3))
// P3: Reverse a String

const reverseString=(str,index)=>{
    if(index<0){
        return ""
    }
    return str.charAt(index) + reverseString(str,index-1)

}
console.log(reverseString("circle",5))

// count vowels
const countVowels = (str, index) => {
    // let count;
    if (index < 0) {
        return 0;
    }
     return ((str.charAt(index) === "a" || 
              str.charAt(index) === "e" || 
              str.charAt(index) === "i" || 
              str.charAt(index) === "o" || 
              str.charAt(index) === "u") ? 1 : 0) 
    + countVowels(str, index - 1)

    // return count

}
console.log(countVowels("voice", 4));


// check palidrome 


const checkPalindrome=(str,start,end)=>{
     if(start>=end){
        return true
     }
     return (str[start]!==str[end])?false:checkPalindrome(str,start+1,end-1);
     
}
console.log(checkPalindrome("noon",0,3));

// findMax([3, 7, 2, 9, 5], 4)
// Output: 9
const arr=[100,77,200.56,9,54]
const findMax=(arr,index)=>{
    if(index===0){
        return arr[0]
    }

    return Math.max(arr[index] , findMax(arr,index-1));
    
}
console.log(findMax(arr,arr.length-1));



// fibonacci(6)
// Output: 8


const fibonacci=(n)=>{
    if(n==0) return n=0
    if(n==1) return n=1
    return fibonacci(n-1)+fibonacci(n-2)
   

}

console.log(fibonacci(4));

