//                                  Lab Assignments
//                      While loop
// 1. Write a program to calculate the sum of the first 10 natural numbers using a while loop.
// 2. Write a program to calculate the factorial of a given number using a while loop.
// 3. Write a program to reverse a given number using a while loop.
// 4. Write a program to check if a given number is a prime number using a while loop.
// 5. Write a program to find the largest digit in a given number using a while loop.
// 6. Write a program to check if a given number is a palindrome using a while loop.
//                       Do-while loop
// 7. Write a program to print numbers from 1 to 10 using a do-while loop.
// 8. Write a Java program that performs basic arithmetic operations (addition, subtraction,
//multiplication, and division) using a do-while loop until the user chooses to exit.
//                              For loop
// 9. Print Multiples of 5 from 5 to 50
// 10. Print Prime Numbers between 1 and 50
// 11. Print Sum of Even Numbers between 1 and 20
// 12. Print Sum of Odd Numbers between 1 and 20
// 13. Print Table of 7
// 14. Print Numbers Divisible by 3 and 5 from 1 to 100
// 15. Count Number of Digits in a Number
// 16. Find Sum of Digits in a Number
// 17. Print Multiples of 7 between 1 and 100
// 18. Calculate the sum of all even numbers from 1 to N.
//                              Continue
// 19. Write a program to print the odd numbers from 1 to 20 using a for loop. Use the
// continue statement to skip even numbers.
// 20. Write a program to print numbers from 1 to 30, but skip numbers that are multiples of 5.
// Use the continue statement within a while loop.
//                               Break
// 21. Write a program to find and print the first even number between 1 and 10 using a for
// loop. Use the break statement to exit the loop as soon as you find the first even number.
// 22. Write a program to print numbers from 1 to 30. Stop printing and exit the loop when you
// find a number greater than 15. Use the break statement within a for loop.
//-------------------------------------------------------------------------
// 1. Write a program to calculate the sum of the first 10 natural numbers using a while loop.
{ let natural_Number:number=1
let sum:number=0;
while (natural_Number<=10) {
    sum=sum+natural_Number;
    natural_Number++;
}
console.log(`Sum of First 10 Natural Number is ${sum}`);}
//-------------------------------------------------------------------------
// 2. Write a program to calculate the factorial of a given number using a while loop.
{ let number:number=3
let natural_Number:number=1
let factorial:number=1;
while (natural_Number<=number) {
    factorial=factorial*natural_Number;
    natural_Number++;
}
console.log(`Factorial of First ${number} Number is ${factorial}`);}
//-------------------------------------------------------------------------
// 3. Write a program to reverse a given number using a while loop.
{let given_Number:number=723;
let reversed_number:number=0;
let temp:number=0
temp=given_Number
while (temp!=0) {
    let reminder:number=temp%10;
    reversed_number=reversed_number*10+reminder;
    temp=Math.floor(temp/10);
}
console.log(`The reversal of the ${given_Number} is ${reversed_number}`);}
//-------------------------------------------------------------------------
// 4. Write a program to check if a given number is a prime number using a while loop.
{let number:number=1;
let natural_Number:number=2;
let isPrime:boolean=true;
if(number<=1){
        isPrime=false;
}
while (natural_Number<=number/2) {
    if(number%natural_Number==0){
        isPrime=false;    
        break;    
    }else{
        isPrime=true;
    }
    natural_Number++;
}
if (isPrime){
      console.log(number + " is a prime number.");
}else{
      console.log (number + " is a Composite number.");
}
}
//-------------------------------------------------------------------------
// 5. Write a program to find the largest digit in a given number using a while loop.
{let given_Number:number=383;
let temp:number=0
let largestNumber:number=0;
temp=given_Number
while (temp!=0) {
    let reminder:number=temp%10;
    if (reminder>largestNumber) {
        largestNumber=reminder;
    }
    temp=Math.floor(temp/10);
}
console.log(`The largest digit from the Given Number ${given_Number} is ${largestNumber}`);}
//-------------------------------------------------------------------------
// 6. Write a program to check if a given number is a palindrome using a while loop.
{let given_Number:number=121;
let palindrome_Number:number=0;
let temp:number=0
temp=given_Number
while (temp!=0) {
    let reminder:number=temp%10;
    palindrome_Number=palindrome_Number*10+reminder;
    temp=Math.floor(temp/10);
}
if(palindrome_Number===given_Number){
    console.log(`The Number ${given_Number} is A Palindrome`);
}else{
    console.log(`The Number ${given_Number} is Not A Palindrome`);
}}
//-------------------------------------------------------------------------