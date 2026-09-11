//-------------------------------------------------------------------------
//1.push()
let arrPush:number[]=[2,5,6,33,5,44,88];
console.log("Before Push:"+arrPush);
arrPush.push(22,46);
console.log("After Push:"+arrPush);
//-------------------------------------------------------------------------
//2.pop()
let arrPop:number[]=[2,5,6,33,5,44,88];
console.log("Before Pop:"+arrPop);
arrPop.pop()
console.log("After Pop:"+arrPop);
//-------------------------------------------------------------------------
//3.splice()
//add
let arrSplice:number[]=[2,5,6,33,5,44,88];
console.log("Before Splice Add:"+arrSplice);
arrSplice.splice(3,0,88)
console.log("After Splice Add:"+arrSplice);
//remove
let arrSplice2:number[]=[2,5,6,33,5,44,88];
console.log("Before Splice Remove 1:"+arrSplice2);
arrSplice2.splice(3,2)
console.log("After Splice Remove 1:"+arrSplice2);
//remove 2
let arrSplice3:number[]=[2,5,6,33,5,44,88];
console.log("Before Splice Remove 2:"+arrSplice3);
arrSplice3.splice(3)
console.log("After Splice Remove 2:"+arrSplice3);
//-------------------------------------------------------------------------
//4.slice()
let arrSlice:number[]=[2,5,6,33,5,44,88];
console.log("Before Slice:"+arrSlice);
let sliced=arrSlice.slice(1)
console.log("Sliced Array:"+sliced);
//-------------------------------------------------------------------------
//5.includes()
let arrInclude:number[]=[2,5,6,33,5,44,88];
console.log("Before Includes:"+arrInclude);
let includeElement=arrInclude.includes(2,4)
console.log("If Element Present In An Array:"+includeElement);
//-------------------------------------------------------------------------
//6.concat()
let arrConcat:number[]=[2,5,6,33,5,44,88];
let arrConcat2:number[]=[88,44,5,33,6,5,2];
let arrConcat3:number[]=[];
console.log("Before Concatenated:"+arrConcat);
console.log("Before Concatenated:"+arrConcat2);
arrConcat3=arrConcat.concat(arrConcat2)
console.log("Concatenated Array:"+arrConcat3);
//-------------------------------------------------------------------------
//7.shift()
let arrShift:number[]=[2,5,6,33,5,44,88];
console.log("Before Shift Array:"+arrShift);
arrShift.shift()
console.log("After Shift Array:"+arrShift);
//-------------------------------------------------------------------------
//8.unshift()
let arrUnshift:number[]=[2,5,6,33,5,44,88];
console.log("Before UnShift Array:"+arrUnshift);
arrUnshift.unshift(2,3,5,6)
console.log("After UnShift Array:"+arrUnshift);
//-------------------------------------------------------------------------
//9.indexOf()
let indexArray=arrUnshift.indexOf(2,3)
console.log("After indexOf Array:"+indexArray);
//-------------------------------------------------------------------------
//10.toString()
let stringArray=arrUnshift.toString()
console.log("String Array:"+stringArray);
let charAt=stringArray.charAt(4)
console.log(charAt);
//-------------------------------------------------------------------------