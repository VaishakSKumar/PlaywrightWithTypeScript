class MethodOverloadingConcept{    
    constructor();
    constructor(a:number,b:number);
    constructor(a?:number,b?:number){
        if (a!=undefined&&b!=undefined) {
            console.log(a+b);
        }else{
            console.log("Default Constructor");
        }
    }

    multiply(a:number,b:number):void;
    multiply(a:number,b:number,c:number):void;
    multiply(a:number,b:number,c?:number):void{
        if(c!=undefined){
            console.log(a*b*c);
        }else{
            console.log(a*b);
        }
        
    }
}

let object1=new MethodOverloadingConcept();
object1.multiply(23,44);

let object2=new MethodOverloadingConcept(2,8);
object2.multiply(23,44,4);