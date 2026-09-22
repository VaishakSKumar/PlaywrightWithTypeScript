//Call Back Function
{
function greetPersonName(name:string):string{
    return `${name}`;
}

function greetWithCallBack(greet:string,personName:(name:string)=>string):void{
    let person=personName("Vaishak");
    console.log(`${greet} is message for ${person}`)
}

greetWithCallBack("Welcome To The Ballroom",greetPersonName)
}
//-------------------------------------------------------------------------

//Overloading with Different Number  of Parameters
{
function add(x:number,y:number):number;

function add(x:number,y:number,z:number):number;

function add(x:number,y:number,z?:number):number {
    return z!==undefined?x+y+z:x+y
}
console.log(add(3,4))
console.log(add(3,4,5))
}
//-------------------------------------------------------------------------

//Overloading with Different Return Types
{
function add(x:number):number;
function add(x:string):string;
function add(x:number|string):number|string{
    return typeof x==="string"?x.toUpperCase():x**2;
};

console.log(add(2))
console.log(add("lammine yammal"))
}
//-------------------------------------------------------------------------

//Overloading with Different Parameter Types
{
function add(x:number):string;

function add(x:string):string;

function add(x:boolean):string;

function add(x:number|string|boolean):string{
    return `Value is ${x}`;
}

console.log(add(2));
console.log(add("Home"));
console.log(add(true));
}