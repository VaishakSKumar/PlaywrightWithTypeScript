//No Parameters, No Return Type
{function printMessage():void {
    console.log("Hello World")
}
printMessage()}
//-------------------------------------------------------------------------
//With Parameters, And Return Type
{function multiply(number_1:number,number_2:number):number {
    return number_1*number_2;
}
console.log(multiply(3,4));}
//-------------------------------------------------------------------------
//With Parameters and Without Return Type
{function printMessage(message:string):void {
    console.log(`Hello ${message}`);
}
printMessage("Vaishak");}
//-------------------------------------------------------------------------
//Without Parameters and With Return Type
{function message():string{
    return "Hello World";
}
console.log(message());}
//-------------------------------------------------------------------------
//With Optional Parameters
{function student(name:string,id:number,emailId?:string):string {
    if (emailId===undefined) {
        return `Hi ${name} And Your Student Id is ${id}`;
    }
    return `Hi ${name} your Student Id is ${id} If you have entered your email its ${emailId}`;
}
console.log(student("Vaishak",38));}
//-------------------------------------------------------------------------
//With Default Parameters
{function student(name:string,id:number,emailId:string="jason@email.com"):string {   
    return `Hi ${name} your Student Id is ${id} If you have entered your email its ${emailId}`;
}
console.log(student("Vaishak",38));}
//-------------------------------------------------------------------------
//With Rest Parameters-Single Type
{function SumOfDigits(...nums:number[]):number {
    let sum:number=0;
    for(let index=0;index<nums.length;index++){
        sum=sum+nums[index];
    }
    return sum;
}
console.log(SumOfDigits(2,3,4,5));}
//-------------------------------------------------------------------------
//With Rest Parameters With Multiple Types
{function lengthOfArray(...arrayTypes:(number|string|boolean)[]):void { 
    console.log(arrayTypes.length);
}
lengthOfArray(2,3,4,5,"John","Micheal","Clarke",true,false,true);}
//-------------------------------------------------------------------------