//No Parameters, No Return Type
{
  let greeting= ():void =>
    console.log("Hello World");
greeting();
}
//-------------------------------------------------------------------------
//With Parameters, And Return Type
 {
    let multiply= (number_1:number,number_2:number):number =>
      number_1*number_2;
 
console.log(multiply(3,4));
}
//-------------------------------------------------------------------------
//With Parameters and Without Return Type
{
    let message= (message:string):void =>
    console.log(`Hello ${message}`);
message("Vaishak");
}
//-------------------------------------------------------------------------
//Without Parameters and With Return Type
{
    let message =():string=>
            "Hello World";
console.log(message());
}
//-------------------------------------------------------------------------
//With Optional Parameters
{
let student=    (name:string,id:number,emailId?:string)=> {
    if (emailId===undefined) {
        return `Hi ${name} And Your Student Id is ${id}`;
    }
    return `Hi ${name} your Student Id is ${id} If you have entered your email its ${emailId}`;
    }
console.log(student("Vaishak",38));
}
//-------------------------------------------------------------------------
//With Default Parameters
{
    let student=(name:string,id:number,emailId:string="jason@email.com"):string=> {   
    return `Hi ${name} your Student Id is ${id} If you have entered your email its ${emailId}`;
}
console.log(student("Vaishak",38));
}
//-------------------------------------------------------------------------
//With Rest Parameters-Single Type
{
    let SumOfDigits=(...nums:number[]):number =>{
    let sum:number=0;
    for(let index=0;index<nums.length;index++){
        sum=sum+nums[index];
    }
    return sum;
}
console.log(SumOfDigits(2,3,4,5));
}
//-------------------------------------------------------------------------
//With Rest Parameters With Multiple Types
{
    let lengthOfArray=(...arrayTypes:(number|string|boolean)[]):void =>{ 
    console.log(arrayTypes.length);
}
lengthOfArray(2,3,4,5,"John","Micheal","Clarke",true,false,true);
}
//-------------------------------------------------------------------------
let greeet=function():string{
    return "Hello World"
}
console.log(greeet())
//-------------------------------------------------------------------------