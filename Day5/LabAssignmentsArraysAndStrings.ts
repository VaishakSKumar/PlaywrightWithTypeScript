/*
1. Add an element to the end of an array using push. 
2. Remove the last element from an array using pop. 
3. Remove the first element from an array using shift. 
4. Add elements at the beginning of an array using unshift. 
5. Concatenate two arrays using concat. 
6. Extract a subarray using slice. 
7. Insert and delete elements using splice. 
8. Find the index of a specific element using indexOf. 
9. Check if an element exists in an array using includes. 
10. Convert an array to a string using toString. 
11. Iterate through an array using forEach and print each element. 
12. Create a new array by doubling the values using map. 
13. Filter out even numbers from an array using filter. 
14. Find the sum of all numbers using reduce. 
15. Check if at least one element is even using some. 
16. Check if all elements are positive using every. 
17. Remove duplicates from an array using filter and indexOf. 
18. Reverse an array. 
19. Find the length of a string. 
20. Convert a string to uppercase using toUpperCase. 
21. Convert a string to lowercase using toLowerCase. 
22. Get a character at a specific index using charAt(). 
23. Find the position of a word using indexOf(). 
24. Check if a string includes a word using includes(). 
25. Check if a string starts with a specific word using startsWith(). 
26. Check if a string ends with a specific word using endsWith(). 
27. Replace a word in a sentence using replace(). 
28. Split a sentence into words using split() and remove leading/trailing spaces using trim(). 
*/

//-------------------------------------------------------------------------
//1. Add an element to the end of an array using push. 
let arrayPush:number[]=[1,5,6,8,9]
console.log(`Before Element Being Pushed Into Array: ${arrayPush}`);
arrayPush.push(10);
console.log(`After Element Being Pushed Into Array: ${arrayPush}`);
//-------------------------------------------------------------------------
//2. Remove the last element from an array using pop. 
let arrayPop:number[]=[1,5,6,8,9]
console.log(`Before Element Being Poped Into Array: ${arrayPop}`);
arrayPop.pop();
console.log(`After Element Being Poped Into Array: ${arrayPop}`);
//-------------------------------------------------------------------------
//3. Remove the first element from an array using shift. 
let arrayShift:number[]=[1,5,6,8,9];
console.log(`Before Element Being Shift Into Array: ${arrayShift}`);
arrayShift.shift();
console.log(`After Element Being Shift Into Array: ${arrayShift}`);
//-------------------------------------------------------------------------
//4. Add elements at the beginning of an array using unshift. 
let arrayUnshift:number[]=[1,5,6,8,9];
console.log(`Before Element Being Unshift Into Array: ${arrayUnshift}`);
arrayUnshift.unshift(0,23,5);
console.log(`After Element Being Unshift Into Array: ${arrayUnshift}`);
//-------------------------------------------------------------------------
//5. Concatenate two arrays using concat. 
let arrayToConcat:number[]=[1,5,6,8,9];
let arrayToConcat2:number[]=[23,5,66,5,4,1];
console.log(`Before Element Being Concat Into Array: ${arrayToConcat}`);
console.log(`Before Element Being Concat Into Array: ${arrayToConcat2}`);
let arrayConcat:number[]=arrayToConcat.concat(arrayToConcat2);
console.log(`After Element Being Concat Into Array: ${arrayConcat}`);
//-------------------------------------------------------------------------
//6. Extract a subarray using slice. 
console.log(`Before Element Being Sliced Into Array: ${arrayConcat}`);
let arraySliced=arrayConcat.slice(2,5);
console.log(`After Element Being Sliced Into Array: ${arraySliced}`);
//-------------------------------------------------------------------------
//7. Insert and delete elements using splice. 
console.log(`Before Element Being Sliced Into Array: ${arrayConcat}`);
let arraySplicedInsert=arrayConcat.splice(3,2,55);
console.log(`Removed Element using Spliced Into Array: ${arraySplicedInsert}`);
console.log(`Insert Element using Spliced Into Array: ${arrayConcat}`);
//-------------------------------------------------------------------------
//8. Find the index of a specific element using indexOf. 
let arrayIndex=arrayConcat.indexOf(4);
console.log(`Index OF Element using indexOf In Array: ${arrayIndex}`);
//-------------------------------------------------------------------------
//9. Check if an element exists in an array using includes. 
let arrayIncludes=arrayConcat.includes(55);
console.log(`Is Includes Element is found includes In Array?: ${arrayIncludes}`);
//-------------------------------------------------------------------------
//10. Convert an array to a string using toString. 
let arrayToString:string=arrayConcat.toString();
console.log(`Array To String In Array: ${arrayToString}`);
console.log(`Character At 4 In String Array: ${arrayToString.charAt(4)}`);
//-------------------------------------------------------------------------
//11. Iterate through an array using forEach and print each element. 
let arrayBeforeForEach:number[]=[1,2,3,4,5,6,7,8,9,10]
console.log(`Iterate through array using forEach:`);
arrayBeforeForEach.forEach(function(element){
    console.log(`${element}`)
})
//-------------------------------------------------------------------------
//12. Create a new array by doubling the values using map. 
let arrayBeforeDoublingUsingMap:number[]=[1,2,3,4,5,6,7,8,9,10]
console.log(`Before Doubling:${arrayBeforeDoublingUsingMap}`);
let arrayAfterDoublingUsingMap=arrayBeforeDoublingUsingMap.map((element)=>element*2)
console.log(`After Doubling:${arrayAfterDoublingUsingMap}`);
//-------------------------------------------------------------------------
//13. Filter out even numbers from an array using filter. 
let arrayBeforeFilter:number[]=[1,2,3,4,5,6,7,8,9,10]
console.log(`Before Filtering Even Numbers:${arrayBeforeFilter}`);
let arrayAfterFilter=arrayBeforeFilter.filter((element)=> element%2==0)
console.log(`After Filtering Even Numbers:${arrayAfterFilter}`);
//-------------------------------------------------------------------------
//14. Find the sum of all numbers using reduce. 
let arrayBeforeReduce:number[]=[1,2,3,4,5,6,7,8,9,10]
console.log(`Before Reduce To get Sum Of All Numbers:${arrayBeforeReduce}`);
let arrayAfterReduce=arrayBeforeReduce.reduce((total,element)=> total+=element,0)
console.log(`After Reduce To get Sum Of All Numbers:${arrayAfterReduce}`);
//-------------------------------------------------------------------------
//15. Check if at least one element is even using some. 
let arrayToCheckElementIsEven=arrayPush.some((element)=> element%2==0)
console.log(`To Check Element In Array Has Even:${arrayToCheckElementIsEven}`);
//-------------------------------------------------------------------------
//16. Check if all elements are positive using every. 
let arrayToCheckAllElementIsPsoitive=arrayPush.every((element)=> element>0)
console.log(`To Check All Element In Array Is Positive:${arrayToCheckAllElementIsPsoitive}`);
//-------------------------------------------------------------------------
//17. Remove duplicates from an array using filter and indexOf. 

//-------------------------------------------------------------------------
//18. Reverse an array. 

//-------------------------------------------------------------------------