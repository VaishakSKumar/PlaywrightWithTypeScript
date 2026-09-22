/*Part 1: Named, Anonymous & Arrow Functions

Basic Arithmetic Named Function:
Write a named function calculateTotal that takes two parameters:
price (number) and taxRate (number), and returns the final calculated total amount as a number.

Anonymous Function Conversion:
Assign an anonymous function to a variable named formatGreeting.
It should accept firstName (string) and lastName (string) as parameters and
return a single concatenated full name string formatted as "LastName, FirstName".

Concise Arrow Function:
Create a single-line arrow function isEven that takes a single parameter num (number)
and returns a boolean (true if the number is even, false otherwise).

Multi-line Arrow Function with Array Processing:
Write a multi-line arrow function getPositiveNumbers that accepts an array of numbers numbers: number[] and returns
a new array containing only the positive numbers greater than 0.

Part 2: 
Callback FunctionsSimple Greeting Callback:
Write a function processUser that accepts userName (string) and a callback function callback:
(name: string) => void. Inside processUser, format the name to uppercase and pass it to the callback execution.

Array Element Transformer Callback: Create a function transformArray that takes an array of numbers numbers:
number[] and a transformation callback function operation: (val: number) => number.
The function should return a new array where each element has been transformed by the callback.

Asynchronous Simulation Callback:
Create a function fetchData that accepts a dataId (number) and a completion callback onComplete:
(status: string, result: string) => void.
Simulate an operation check: if dataId is greater than 0, invoke onComplete("SUCCESS", "Data loaded");
otherwise, invoke onComplete("ERROR", "Invalid ID").


Part 3:
Function OverloadingOverloading with Different Parameter Types:
Write a function formatInput with overload signatures to accept either a number or a string.
If a number is passed, return the value multiplied by 100 as a number.
If a string is passed, return the string repeated twice as a string.
Provide a compatible implementation function to handle both cases.

Overloading with Different Parameter Counts:
Create a function calculateArea with overload signatures:
calculateArea(side: number): number (calculates square area)
calculateArea(length: number, width: number): number (calculates rectangle area)
Write the single implementation signature using an optional parameter to return the appropriate calculated area.

Overloading with Distinct Return Types:
Write an overloaded function parseData:
Signature 1: Takes input: string and returns string[] (splits string by comma).
Signature 2: Takes input: number and returns boolean (returns true if input is positive, false otherwise).
Implement the function cleanly to fulfill both overload contracts.
*/

//-------------------------------------------------------------------------
/*1.Basic Arithmetic Named Function:
Write a named function calculateTotal that takes two parameters:
price (number) and taxRate (number), and returns the final calculated total amount as a number.*/

function calculateTotal(price:number,taxRate:number):number{
    let total=price+(price*(taxRate/100));
    return total;
}
console.log(calculateTotal(23.5,26.6));
//-------------------------------------------------------------------------
/*2.Anonymous Function Conversion:
Assign an anonymous function to a variable named formatGreeting.
It should accept firstName (string) and lastName (string) as parameters and
return a single concatenated full name string formatted as "LastName, FirstName".
*/

let formatGreeting=function(firstName:string,lastName:string):string{    
    return `${lastName}, ${firstName}`;
}
console.log(formatGreeting("Vaishak","S Kumar"))
//-------------------------------------------------------------------------

/*3.Concise Arrow Function:
Create a single-line arrow function isEven that takes a single parameter num (number)
and returns a boolean (true if the number is even, false otherwise).*/

let isEven=(num:number)=> num%2===0?true:false;
console.log(isEven(22));
//-------------------------------------------------------------------------
/*4.Multi-line Arrow Function with Array Processing:
Write a multi-line arrow function getPositiveNumbers that accepts an array of numbers numbers: number[] and returns
a new array containing only the positive numbers greater than 0.*/
let getPositiveNumbers=(...numbers:number[]):number[]=> {
    let positiveNumbers:number[]=[];
    let count=0;
    for (let index = 0; index < numbers.length; index++) {       
        if (numbers[index]>0) {
            positiveNumbers[count]=numbers[index];
            count++;
        }
    }
    return positiveNumbers;
}
console.log(getPositiveNumbers(2,3,6,-25,-9,-7,8,6));
//-------------------------------------------------------------------------

/*5. Callback FunctionsSimple Greeting Callback:
Write a function processUser that accepts userName (string) and a callback function callback:
(name: string) => void.
Inside processUser, format the name to uppercase and pass it to the callback execution.*/
function displayGreeting(name:string):void {
    console.log(`${name}`);    
}
function processUser(userName:string,callback:(name: string)=>void):void{
    callback(userName.toUpperCase());       
}
processUser("lammine",displayGreeting)
//-------------------------------------------------------------------------
/*6. Array Element Transformer Callback: 
Create a function transformArray
that takes an array of numbers numbers:number[] and a transformation callback function operation: (val: number) => number.
The function should return a new array where each element has been transformed by the callback.*/
function squaretransformer(val:number):number {
    return val*val;
}
function transformArray(numbers:number[],operation:(val: number) => number):number[]{
    let transformedArray:number[]=[];
    for (let index = 0; index < numbers.length; index++) {
        transformedArray[index]=operation(numbers[index])        
    }
    return transformedArray;
}
console.log(transformArray([2,3,5,6],squaretransformer));

//-------------------------------------------------------------------------
/*7. Asynchronous Simulation Callback:
Create a function fetchData that accepts a dataId (number) and 
a completion callback onComplete:(status: string, result: string) => void.
Simulate an operation check: 
if dataId is greater than 0, invoke onComplete("SUCCESS", "Data loaded");
otherwise, invoke onComplete("ERROR", "Invalid ID").*/
function operationCheck(status: string, result: string):void{
 console.log(`Your Status: ${status} and ${result}`); 
}
function fetchData(dataId:number,onComplete:(status: string, result: string) => void):void {
    if (dataId>0) {
        onComplete("SUCCESS", "Data loaded");
    }else{
        onComplete("ERROR", "Invalid ID");
    }
}

fetchData(-10,operationCheck)
//-------------------------------------------------------------------------
/*
Function OverloadingOverloading with Different Parameter Types:
Write a function formatInput with overload signatures to accept either a number or a string.
If a number is passed, return the value multiplied by 100 as a number.
If a string is passed, return the string repeated twice as a string.
Provide a compatible implementation function to handle both cases.
*/
function formatInput(input:number):number;
function formatInput(input:string):string;
function formatInput(input:number|string):number|string{
    return typeof input==="string"?input+input:input*100;
};
console.log(formatInput(23))
console.log(formatInput("Kill"))
//-------------------------------------------------------------------------
/*
Overloading with Different Parameter Counts:
Create a function calculateArea with overload signatures:
calculateArea(side: number): number (calculates square area)
calculateArea(length: number, width: number): number (calculates rectangle area)
Write the single implementation signature using an optional parameter to return the appropriate calculated area.
*/
function calculateArea(side: number): number;
function calculateArea(length: number, width: number): number;
function calculateArea(number_1: number, number_2?: number): number{
    return number_2!=undefined?number_1*number_2:number_1**2;
}
console.log(`Area of Square:`+calculateArea(23))
console.log(`Area of Rectangle:`+calculateArea(6,4))
//-------------------------------------------------------------------------
/*
Overloading with Distinct Return Types:
Write an overloaded function parseData:
Signature 1: Takes input: string and returns string[] (splits string by comma).
Signature 2: Takes input: number and returns boolean (returns true if input is positive, false otherwise).
Implement the function cleanly to fulfill both overload contracts.
*/

function parseData(input: string): string[];
function parseData(input: number): boolean;
function parseData(input: string|number): string[]|boolean{
    return typeof input==="string"?input.split(","):input > 0?true:false;
}
console.log(parseData("apple,banana,orange"))
console.log(parseData(22))
console.log(parseData(-22))
//-------------------------------------------------------------------------