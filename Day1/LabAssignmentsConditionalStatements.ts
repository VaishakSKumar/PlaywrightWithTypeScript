//                                 Lab Assignments
//                          If condition:
// 1. Check if a character is uppercase.
// 2. Check if a number is a multiple of 10.
//-------------------------------------------------------------------------
// 1. Check if a character is uppercase.
let charc:String='u';
if (charc>='A'&&charc<='Z') {
    console.log(`${charc} Character is Uppercase`);
}
//-------------------------------------------------------------------------
// 2. Check if a number is a multiple of 10.
let number:number=20;
if (number%10==0) {
    console.log(`${number} is a Multiple of 10`)
}
//-------------------------------------------------------------------------
//                         If else condition:
// 3. Check if a person is a teenager (age between 13 and 19).
// 4. Compare two numbers and print the larger one.
// 5. Check if a number is positive, negative, or zero.
// 6. Check if a person is eligible for a senior citizen discount (age >= 60).
//-------------------------------------------------------------------------

// 3. Check if a person is a teenager (age between 13 and 19).
let age:number=13;
if (age>=13&&age<=19) {
    console.log(`${age} is a teenager`);
    
} else if (age<13) {
    console.log(`${age} is a Kid`);    
} else{
    console.log(`${age} is an adult`);    
}
//-------------------------------------------------------------------------
// 4. Compare two numbers and print the larger one.
let number_1:number=43;
let number_2:number=43;
if (number_1>number_2) {
    console.log(`${number_1} is Larger than ${number_2}`);    
} else if (number_1<number_2) {
    console.log(`${number_2} is Larger than ${number_1}`);
}else{
    console.log(`Both number_1 and number_2 are equal`);    
}
//-------------------------------------------------------------------------
// 5. Check if a number is positive, negative, or zero.
let number_1:number=0;
if (number_1 > 0) {
    console.log(`${number_1} is a positive number`);    
} else if (number_1 < 0) {
    console.log(`${number_1} is a negative number`);
}else{
    console.log(`number_1 is 0`);    
}
//-------------------------------------------------------------------------
// 6. Check if a person is eligible for a senior citizen discount (age >= 60).
let age:number=67;
if (age >=60) {
    console.log(`Person aged ${age} is Eligible for Senior Citizen Discount`);    
}else{
    console.log(`Person aged ${age} is Not Eligible for Senior Citizen Discount`);    
}
//-------------------------------------------------------------------------