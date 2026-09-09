//                                 Lab Assignments
//                          If condition:
// 1. Check if a character is uppercase.
// 2. Check if a number is a multiple of 10.
//                         If else condition:
// 3. Check if a person is a teenager (age between 13 and 19).
// 4. Compare two numbers and print the larger one.
// 5. Check if a number is positive, negative, or zero.
// 6. Check if a person is eligible for a senior citizen discount (age >= 60).
//                         Nested if else: 
// 7. Check if a number is positive and even. 
// 8. Check if a character is an uppercase vowel. 
// 9. Find the largest of three numbers. 
// 10. Check if a number is a multiple of both 5 and 10. 
// 11. Check if a character is a vowel or consonant. 
// 12. Check if a number is divisible by both 2 and 3. 
//                          Switch case: 
// 13. Print the corresponding month name for a given month number. 
// 14. Perform basic arithmetic operations based on user input. 
// 15. Print the season based on the month number. 
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
// 7. Check if a number is positive and even. 
let number_1:number=-33;
if (number_1>0) {
    if (number_1%2==0) {
        console.log(`${number_1} is Positive and even`);        
    }else{
        console.log(`${number_1} is Positive and Not Even`); 
   }
} else {
       console.log(`${number_1} is Not Positive Number`);       
}
//-------------------------------------------------------------------------
// 8. Check if a character is an uppercase vowel. 
let character:string='N';
if (character>="A"&&character<="Z") {
    if (character==="A"||character==="E"||character==="I"||character==="O"||character==="U") {
        console.log(`${character} is an uppercase vowel`);        
    }else{
        console.log(`${character} is an uppercase and Not vowel`); 
   }
} else {
       console.log(`${character} is Not uppercase`);       
}
//-------------------------------------------------------------------------
// 9. Find the largest of three numbers. 
let number_1:number=40;
let number_2:number=39;
let number_3:number=62;
if (number_1>=number_2&&number_1>=number_3) {
    console.log(`${number_1} is largest of 3 numbers so number_1 is Largest`);    
} else if (number_2>=number_1&&number_2>=number_3) {
    console.log(`${number_2} is largest of 3 numbers so number_2 is Largest`);
}else{
     console.log(`${number_3} is largest of 3 numbers so number_3 is Largest`);
}
//-------------------------------------------------------------------------
// 10. Check if a number is a multiple of both 5 and 10. 
let number_1:number=93;
if (number_1%5==0){
    if(number_1%10==0) {
        console.log(`${number_1} is a multiple of both 5 and 10`);    
    }else{
          console.log(`${number_1} is a multiple of 5 Not 10`);    
    }
}else {
    console.log(`${number_1} is Not a multiple of 5`);
}
//-------------------------------------------------------------------------
// 11. Check if a character is a vowel or consonant. 
let character:string='U';
if (character>="A"&&character<="Z"||character>="a"&&character<="z") {
    if (character==="A"||character==="E"||character==="I"||character==="O"||character==="U"||character==="a"||character==="e"||character==="i"||character==="o"||character==="u") {
        console.log(`${character} is a vowel`);        
    }else{
        console.log(`${character} is consonant`); 
   }
}
//-------------------------------------------------------------------------
// 12. Check if a number is divisible by both 2 and 3. 
let number_1:number=13;
if (number_1%2==0){
    if(number_1%3==0) {
        console.log(`${number_1} is divisible by Both 2 and 3`);    
    }else{
          console.log(`${number_1} is divisible by 2 and Not 3`);    
    }
}else if(number_1%3==0){
    console.log(`${number_1} is divisible by 3 and Not 2`);
}else{
      console.log(`${number_1} is Not divisible by Both 2 and 3`);
}
//-------------------------------------------------------------------------
// 13. Print the corresponding month name for a given month number. 
let month_number:number=1;
switch (month_number) {
    case 1:
        console.log(`Given ${month_number} Month Number is January`);        
        break;
    case 2:
        console.log(`Given ${month_number} Month Number is February`);
        break;
    case 3:
        console.log(`Given ${month_number} Month Number is March`);
        break;
    case 4:
        console.log(`Given ${month_number} Month Number is April`); 
        break;
    case 5:
        console.log(`Given ${month_number} Month Number is May`); 
        break;
    case 6:
        console.log(`Given ${month_number} Month Number is June`); 
        break;
    case 7:
        console.log(`Given ${month_number} Month Number is July`); 
        break;
    case 8:
        console.log(`Given ${month_number} Month Number is August`); 
        break;
    case 9:
        console.log(`Given ${month_number} Month Number is September`); 
        break;
    case 10:
        console.log(`Given ${month_number} Month Number is October`); 
        break;
    case 11:
        console.log(`Given ${month_number} Month Number is November`); 
        break;
    case 12:
        console.log(`Given ${month_number} Month Number is December`); 
        break;
    default:
        console.log(`Given ${month_number} is Inavalid Month Name`);
        break;
}
//-------------------------------------------------------------------------
// 14. Perform basic arithmetic operations based on user input. 
let number_1:number=5
let number_2:number=0
let arithmetic_Operator:String="/"
let value:number;
switch (arithmetic_Operator) {
    case "+":
        value=number_1+number_2
        console.log(`${number_1} ${arithmetic_Operator} ${number_2} = ${value}`);        
        break;
    case "-":
        value=number_1-number_2
        console.log(`${number_1} ${arithmetic_Operator} ${number_2} = ${value}`);        

        break;
    case "*":
        value=number_1*number_2
        console.log(`${number_1} ${arithmetic_Operator} ${number_2} = ${value}`);        

        break;
    case "/":
        if (number_2===0) {
            console.log(`${number_1} ${arithmetic_Operator} ${number_2} = Infinity`);   
        }else{
        value=number_1/number_2
        console.log(`${number_1} ${arithmetic_Operator} ${number_2} = ${value}`);      
        }
        break;
    default:
        console.log(`Invalid Arithemetic Operator`);     
        break;
}
//-------------------------------------------------------------------------
// 15. Print the season based on the month number. 
let month_number:number=4;
switch (month_number) {
    case 12:
    case 1:
    case 2:
        console.log(`${month_number} Month Number is  Winter`);        
        break;
    case 3:
    case 4:
    case 5:
        console.log(`${month_number} Month Number is Spring`);        
        break;
    case 6:
    case 7:
    case 8:
        console.log(`${month_number} Month Number is Summer`);        
        break;   
    case 9:
    case 10:
    case 11:
        console.log(`${month_number} Month Number is Autumn(Fall)`);        
        break; 
    default:
        console.log(`${month_number} Month Number is Invalid Month Number`); 
        break;
}
//-------------------------------------------------------------------------