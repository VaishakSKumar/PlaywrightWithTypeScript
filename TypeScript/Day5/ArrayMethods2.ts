//foreach()
let arr:number[]=[2,3,5,6,2,5,6,33,5,44,88]
console.log('Element and Index Value are:')
arr.forEach(
    function(element,index) {
         console.log(`${element} : ${index}`)
    }
)
console.log('-------------------------------------------------------------------------')
console.log('Double Numbers are:')
let doubleNumber=arr.forEach(function(element){console.log(element*2)});
//-------------------------------------------------------------------------
//map()
let square=arr.map((element)=>element**2)
console.log('Square Numbers are:',square)
//-------------------------------------------------------------------------
//filter()
let evenNumbers=arr.filter((element)=>element%2==0)
console.log('Even Numbers are:',evenNumbers)
//-------------------------------------------------------------------------
//reduce()
let sumOfNumbers=arr.reduce((total,element)=>total+=element,0)
console.log('Sum Of Numbers are:',sumOfNumbers)
//-------------------------------------------------------------------------
//some()
let greaterThan1=arr.some((element)=> element>1)
console.log('Element Greater Than 1:',greaterThan1)
//-------------------------------------------------------------------------
//every()
let greaterThan2=arr.every((element)=> element>2)
console.log('Element Greater Than 2:',greaterThan2)
//-------------------------------------------------------------------------