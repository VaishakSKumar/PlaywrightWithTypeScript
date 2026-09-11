//Array Literals In a Function
function isElementPresentInAnArray(element:number,array:number[]):boolean{    
    for (let index in array) {
      if(array[index]===element){
        return true;
    }       
    }    
    return false;
}

console.log(isElementPresentInAnArray(30,[20,45,88,6,5,77,3]));
//-------------------------------------------------------------------------
//Array Function Return type
function lowerToUpperCase(array:string[]):string[]{ 
    let result:string[]=[]   
    for (let index of array) {
       result.push(index.toUpperCase());
    }    
    return result;
}

console.log(lowerToUpperCase(["hello","howareyou","typescript"]));
//-------------------------------------------------------------------------
//Tuples with 2 values
let arr:[number,string]=[23,"John"]
console.log(arr)
//-------------------------------------------------------------------------
//Tuples with multiple values
let arr1:[number,string,boolean,string,number]=[23,"John",true,"Micheal",55]
console.log(arr1)
//-------------------------------------------------------------------------
//Tuples with arrays
let arr2:[number,string,boolean,string,number][]=[[23,"John",true,"Micheal",55],[44,"Hamilton",true,"North",13],[45,"Kim",true,"West",50]]
console.log(arr2)
//-------------------------------------------------------------------------