// Arrow function Problems:
// P1: Write an arrow function that doubles the given number

const doubleNum=(num)=>num+num;
console.log(doubleNum(90));

// P2: Convert Celsius to Fahrenheit 
// Formula: F = C * 9/5 + 32

const celToFrahenheit=(cel)=>(cel*(9/5)+32);
console.log(celToFrahenheit(100));

// P3: Check if Number is Positive
const checkPositive=(num)=>{
    if(num>0){
        return "positive"
    }
    
}
console.log(checkPositive(90));

// ---------------------------------------------------------------------

// Anonymous Function Problems:
// P1: Subtract Two Numbers

const subtract=function(a,b){
    return a-b;
}

console.log(subtract(3,2));


// P2: Display a Message

setTimeout(function(){
    console.log(`SUCCESSFULLY LOGIN`);
    
},3000)


// P3: Calculate Area of a Circle
// Area = π × r²

const area=function(rad){
    return   (3.14 * (rad*rad));
}
console.log(area(10));


// ---------------------------------------------------------------

// IIFE Problems:
// P1: Immediately Log a Number
const myfunction=(function(num){
    return num
})()
console.log(myfunction(2));


// P2: IIFE with Parameter

// P3: Calculate and Show Square (IIFE)




