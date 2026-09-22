//1.Using Object Type Directly Define the Variables for Values

let employee={
    name:"Jason",
    age:23,
    phoneNumber:9858963221,
    isEmployee:true,
    getDetails:function(){
        return `${this.name} is of ${this.age} and his phone number is ${this.phoneNumber} and is he an employee ${this.isEmployee}`;
    }
};

console.log(employee.getDetails());

//-------------------------------------------------------------------------
//2.Inline Type Objects We Also define the Keys
let employee1:{
    name:string,
    age:number,
    phoneNumber:number,
    isEmployee:boolean,
    getDetails:()=>string;
}={
    name:"Jermie",
    age:25,
    phoneNumber:9876543210,
    isEmployee:false,
    getDetails:function(){
     return `${this.name} is of ${this.age} and his phone number is ${this.phoneNumber} and is he an employee ${this.isEmployee}`;
    }
};

console.log(employee1.getDetails());

//-------------------------------------------------------------------------
//3.Using 'type' alias allows creating a new name for existing type
type Product={
    name:string,
    price:number,
    getDetails:()=>string;
}

let book1:Product={
    name:"Learn Java",
    price:250,
    getDetails:function(){
          return `${this.name} is of ${this.price}`;
    }
}

let book2:Product={
    name:"Learn JavaScript",
    price:350,
    getDetails:function(){
          return `${this.name} is of ${this.price}`;
    }
}

console.log(book1.getDetails());
console.log(book2.getDetails());

//Intersection Types
type contact={
    email:string,
    phone:number;
}

type name={
    firstName:string,
    lastName:string;
}

type candidate=name&contact&{ 
    getDetails:()=>string
}

let cand1:candidate={
    firstName: "Jason",
    lastName: "Doe",
    email: "jason@example.com",
    phone: 9858963221,
    getDetails:function() {
        return `${this.firstName} ${this.lastName} can be contacted by ${this.email} or ${this.phone}`;
    }
}

console.log(cand1.getDetails());
//-------------------------------------------------------------------------
//4.Using the classes
class Person{
    ssn:number;
    firstName:string;
    lastName:string;

    constructor(ssn:number,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    getDetails(){
        return `${this.ssn} ${this.getFullName()}`
    }
};

let vaishak=new Person(121132556,"Vaishak","S Kumar");
console.log(vaishak.getDetails());
let nivethaa=new Person(12225586,"Nivethaa","Mohan");
console.log(nivethaa.getDetails());
//-------------------------------------------------------------------------